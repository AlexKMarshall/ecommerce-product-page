import * as styles from './icon-button.css'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { HiddenVisually } from '..'
import Link from 'next/link'
import { XOR } from 'src/types/utils'

type ButtonProps = {
  onClick: () => void
}

type AnchorProps = {
  href: string
}

type CommonProps = {
  children: ReactNode
  label: string
  badgeValue?: number
  color?: 'primary' | 'secondary'
}

type Props = CommonProps & XOR<ButtonProps, AnchorProps>
export function IconButton({
  children,
  color = 'secondary',
  badgeValue,
  label,
  ...props
}: Props): JSX.Element {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a className={styles.iconButton({ color })}>
          {children}
          <HiddenVisually>{label}</HiddenVisually>
        </a>
      </Link>
    )
  }
  return (
    <button className={styles.iconButton({ color })} {...props}>
      {children}
      {badgeValue ? <span className={styles.badge}>{badgeValue}</span> : null}
      <HiddenVisually>{label}</HiddenVisually>
    </button>
  )
}
