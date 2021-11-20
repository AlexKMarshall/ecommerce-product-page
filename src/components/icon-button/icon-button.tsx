import * as styles from './icon-button.css'

import { HiddenVisually } from '..'
import Link from 'next/link'
import { ReactNode } from 'react'
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
  color?: 'default' | 'muted'
  hoverOutline?: true
}

type Props = CommonProps & XOR<ButtonProps, AnchorProps>
export function IconButton({
  children,
  color,
  badgeValue,
  label,
  hoverOutline,
  ...props
}: Props): JSX.Element {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a className={styles.iconButton({ color, hoverOutline })}>
          {children}
          <HiddenVisually>{label}</HiddenVisually>
        </a>
      </Link>
    )
  }
  return (
    <button className={styles.iconButton({ color, hoverOutline })} {...props}>
      {children}
      {badgeValue ? <span className={styles.badge}>{badgeValue}</span> : null}
      <HiddenVisually>{label}</HiddenVisually>
    </button>
  )
}
