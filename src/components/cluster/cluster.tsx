import * as styles from './cluster.css'

import { Box, BoxProps } from '..'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  space?: BoxProps['gap']
  justify?: BoxProps['justifyContent']
  align?: BoxProps['alignItems']
  component?: BoxProps['component']
  noWrap?: true
}
export function Cluster({
  children,
  space = 's',
  justify,
  align = 'center',
  noWrap,
  component,
}: Props): JSX.Element {
  return (
    <Box
      className={styles.cluster}
      gap={space}
      justifyContent={justify}
      alignItems={align}
      component={component}
      {...(noWrap && { flexWrap: 'nowrap' })}
    >
      {children}
    </Box>
  )
}
