import * as styles from './button.css'

import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  children: ReactNode
  onClick: () => void
}

export function Button({
  onClick,
  children,
  type = 'button',
  ...props
}: Props): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  )
}
