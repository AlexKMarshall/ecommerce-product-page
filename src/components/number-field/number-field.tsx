import * as styles from './number-field.css'

import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Icon } from '..'
import { clamp } from 'src/utils/clamp'

type Props = {
  label: string
  id: string
  defaultValue?: number
  min?: number
  max?: number
  value?: number
  onChange?: (value: number) => void
}
export function NumberField({
  defaultValue = 0,
  label,
  min,
  max,
  id,
  value,
  onChange,
}: Props): JSX.Element {
  const { inputProps, increaseButtonProps, decreaseButtonProps } =
    useNumberField({
      defaultValue,
      label,
      min,
      max,
      id,
      value,
      onChange,
    })

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} {...decreaseButtonProps}>
        <Icon icon="minus" size="xs" />
      </button>
      <input className={styles.input} {...inputProps} />
      <button className={styles.button} {...increaseButtonProps}>
        <Icon icon="plus" size="xs" />
      </button>
    </div>
  )
}

function validateInput(input: string): boolean {
  // for now only checking if there is anything other than a digit
  // this could check for decimals etc later
  return input.match(/\D/) ? false : true
}

// Can't get generics to work yet with the function styles updater
function useControlledNumericState(
  controlledValue: number | undefined,
  defaultValue: number,
  onChange?: (value: number) => void
) {
  const [uncontrolledValue, setUncontrolledValue] =
    useState<number>(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = useCallback(
    (updater: number | ((value: number) => number)) => {
      const newValue = typeof updater === 'function' ? updater(value) : updater
      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onChange?.(newValue)
    },
    [isControlled, onChange, value]
  )

  return [value, setValue] as const
}

type UseNumberFieldProps = {
  label: string
  id: string
  defaultValue?: number
  min?: number
  max?: number
  value?: number
  onChange?: (value: number) => void
}
function useNumberField({
  defaultValue = 0,
  label,
  min,
  max,
  id,
  value: controlledNumericValue,
  onChange,
}: UseNumberFieldProps) {
  const [numericValue, setNumericValue] = useControlledNumericState(
    controlledNumericValue,
    defaultValue,
    onChange
  )

  const [inputValue, setInputValue] = useState(() => numericValue.toString())
  const updateInput = (value: string) => {
    const isValid = validateInput(value)
    if (isValid) {
      setInputValue(value)
    }
  }

  useEffect(() => {
    setInputValue(numericValue.toString())
  }, [numericValue])

  return useMemo(() => {
    const updateNumericValue = (
      value: number | ((value: number) => number)
    ) => {
      const newValue = typeof value === 'function' ? value(numericValue) : value
      const clampedNewValue = clamp(newValue, { min, max })
      setNumericValue(clampedNewValue)
    }

    const increment = () => updateNumericValue((value) => value + 1)
    const decrement = () => updateNumericValue((value) => value - 1)
    const commit = () => {
      if (!inputValue.length) {
        updateNumericValue(NaN)
        return
      }
      updateNumericValue(parseInt(inputValue))
    }

    const inputProps: Partial<InputHTMLAttributes<HTMLInputElement>> = {
      type: 'text',
      inputMode: 'numeric' as const,
      autoComplete: 'off',
      autoCorrect: 'off',
      value: inputValue,
      onChange: (e) => updateInput(e.currentTarget.value),
      onBlur: () => commit(),
      'aria-label': label,
    }

    const decreaseButtonProps: Partial<
      ButtonHTMLAttributes<HTMLButtonElement>
    > = {
      onClick: decrement,
      'aria-label': `Decrease ${label}`,
      'aria-controls': id,
    }
    const increaseButtonProps: Partial<
      ButtonHTMLAttributes<HTMLButtonElement>
    > = {
      onClick: increment,
      'aria-label': `Increase ${label}`,
      'aria-controls': id,
    }

    return { increaseButtonProps, decreaseButtonProps, inputProps }
  }, [id, inputValue, label, max, min, numericValue, setNumericValue])
}
