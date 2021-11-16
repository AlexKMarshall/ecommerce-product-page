import * as styles from './cluster.css'

import { Box, BoxProps } from '..'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  space?: BoxProps['gap']
  justify?: BoxProps['justifyContent']
  align?: BoxProps['alignItems']
}
export function Cluster({
  children,
  space = 's',
  justify,
  align = 'center',
}: Props): JSX.Element {
  return (
    <Box
      className={styles.cluster}
      gap={space}
      justifyContent={justify}
      alignItems={align}
    >
      {children}
    </Box>
  )
}
