import * as styles from './icon-button.css'

import Link from 'next/link'
import { ReactNode } from 'react'

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U

type ButtonProps = {
  onClick: () => void
}

type AnchorProps = {
  href: string
}

type CommonProps = {
  children: ReactNode
}

type Props = CommonProps & XOR<ButtonProps, AnchorProps>
export function IconButton({ children, ...props }: Props): JSX.Element {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a className={styles.iconButton}>{children}</a>
      </Link>
    )
  }
  return (
    <button className={styles.iconButton} onClick={props.onClick}>
      {children}
    </button>
  )
}
