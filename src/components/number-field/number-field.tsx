import { AllHTMLAttributes, useRef } from 'react'

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
}
export function NumberField(props: Props): JSX.Element {
  const { locale } = useLocale()
  const state = useNumberFieldState({ ...props, locale })
  const inputRef = useRef<HTMLInputElement>(null)
  const incrementRef = useRef<HTMLButtonElement>(null)
  const decrementRef = useRef<HTMLButtonElement>(null)
  const {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, inputRef)

  const { buttonProps: incrementProps } = useButton(
    incrementButtonProps,
    incrementRef
  )
  const { buttonProps: decrementProps } = useButton(
    decrementButtonProps,
    decrementRef
  )
  return (
    <div {...groupProps}>
      <button {...decrementProps} ref={decrementRef}>
        -
      </button>
      <input {...inputProps} ref={inputRef} />
      <button {...incrementProps} ref={incrementRef}>
        +
      </button>
    </div>
  )
}
