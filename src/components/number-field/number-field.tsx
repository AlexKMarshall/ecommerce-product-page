import * as styles from './number-field.css'

import {
  AllHTMLAttributes,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Icon } from '..'
import { useButton } from '@react-aria/button'
import { useLocale } from '@react-aria/i18n'
import { useNumberField } from '@react-aria/numberfield'
import { useNumberFieldState } from '@react-stately/numberfield'

type Props = Pick<
  AllHTMLAttributes<HTMLInputElement>,
  'aria-label' | 'aria-labelledby'
> & {
  label?: string | JSX.Element
  minValue?: number
  defaultValue?: number
  value?: number
  onChange?: (value: number) => void
}
export function NumberFieldOld(props: Props): JSX.Element {
  const { locale } = useLocale()
  const state = useNumberFieldState({ ...props, locale })
  const inputRef = useRef<HTMLInputElement>(null)
  const incrementRef = useRef<HTMLButtonElement>(null)
  const decrementRef = useRef<HTMLButtonElement>(null)
  const { groupProps, inputProps, incrementButtonProps, decrementButtonProps } =
    useNumberField(props, state, inputRef)

  const { buttonProps: incrementProps } = useButton(
    incrementButtonProps,
    incrementRef
  )
  const { buttonProps: decrementProps } = useButton(
    decrementButtonProps,
    decrementRef
  )
  console.log({ decrementProps, inputProps, incrementProps })

  return (
    <div {...groupProps} className={styles.wrapper}>
      <button {...decrementProps} ref={decrementRef} className={styles.button}>
        <Icon icon="minus" size="xs" />
      </button>
      <input {...inputProps} ref={inputRef} className={styles.input} />
      <button {...incrementProps} ref={incrementRef} className={styles.button}>
        <Icon icon="plus" size="xs" />
      </button>
    </div>
  )
}

type NumberFieldProps = {
  label: string
  defaultValue?: number
}
export function NumberField({
  defaultValue = 0,
  label,
}: NumberFieldProps): JSX.Element {
  const [numericValue, setNumericValue] = useState(defaultValue)
  const [inputValue, setInputValue] = useState(() => numericValue.toString())
  const increment = () => setNumericValue((value) => value + 1)
  const decrement = () => setNumericValue((value) => value - 1)
  const commit = () => {
    if (!inputValue.length) {
      setNumericValue(NaN)
      return
    }
    setNumericValue(parseInt(inputValue))
  }

  useEffect(() => {
    setInputValue(numericValue.toString())
  }, [numericValue])

  const inputProps: Partial<InputHTMLAttributes<HTMLInputElement>> = {
    type: 'text',
    inputMode: 'numeric' as const,
    autoComplete: 'off',
    autoCorrect: 'off',
    value: inputValue,
    onChange: (e) => setInputValue(e.currentTarget.value),
    onBlur: () => commit(),
    'aria-label': label,
  }

  const decrementButtonProps = {
    onClick: decrement,
    'aria-label': `Decrement ${label}`,
  }
  const incrementButtonProps = {
    onClick: increment,
    'aria-label': `Increment ${label}`,
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} {...decrementButtonProps}>
        <Icon icon="minus" size="xs" />
      </button>
      <input className={styles.input} {...inputProps} />
      <button className={styles.button} {...incrementButtonProps}>
        <Icon icon="plus" size="xs" />
      </button>
    </div>
  )
}
