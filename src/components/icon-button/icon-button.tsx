import * as styles from './icon-button.css'

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
