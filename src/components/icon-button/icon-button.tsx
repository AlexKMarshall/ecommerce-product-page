import * as styles from './icon-button.css'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function IconButton({ children }: Props): JSX.Element {
  return <button className={styles.iconButton}>{children}</button>
}
