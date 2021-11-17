import * as styles from './icon-button.css'

import { ButtonHTMLAttributes, ReactNode } from 'react'

import Link from 'next/link'
import { XOR } from 'src/types/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void
}

type AnchorProps = {
  href: string
}

type CommonProps = {
  children: ReactNode
  color?: 'primary' | 'secondary'
}

type Props = CommonProps & XOR<ButtonProps, AnchorProps>
export function IconButton({
  children,
  color = 'secondary',
  ...props
}: Props): JSX.Element {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a className={styles.iconButton({ color })}>{children}</a>
      </Link>
    )
  }
  return (
    <button className={styles.iconButton({ color })} {...props}>
      {children}
    </button>
  )
}
