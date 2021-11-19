import * as styles from './cluster.css'

import { Box, BoxProps } from '..'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  space?: BoxProps['gap']
  justify?: BoxProps['justifyContent']
  align?: BoxProps['alignItems']
  component?: BoxProps['component']
}
export function Cluster({
  children,
  space = 's',
  justify,
  align = 'center',
  component,
}: Props): JSX.Element {
  return (
    <Box
      className={styles.cluster}
      gap={space}
      justifyContent={justify}
      alignItems={align}
      component={component}
    >
      {children}
    </Box>
  )
}
