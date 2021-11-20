import * as styles from './center.css'

import { Box } from '..'
import { ReactNode } from 'react'

type Props = { children: ReactNode }
export function Center({ children }: Props): JSX.Element {
  return <Box className={styles.center}>{children}</Box>
}
