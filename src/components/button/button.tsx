import * as styles from './button.css'

import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Icon } from '..'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  children: ReactNode
  onClick: () => void
  variant?: 'accent'
  icon?: Icon
  shadow?: boolean
}

export function Button({
  onClick,
  children,
  type = 'button',
  variant,
  icon,
  shadow,
  ...props
}: Props): JSX.Element {
  return (
    <button
      className={styles.button({ variant, shadow })}
      onClick={onClick}
      type={type}
      {...props}
    >
      {icon ? <Icon icon={icon} /> : null}
      {children}
    </button>
  )
}
