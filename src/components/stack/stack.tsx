import * as styles from './stack.css'

import { Box, BoxProps } from '..'
import { ElementType, ReactNode } from 'react'

type Props = {
  children: ReactNode
  space?: BoxProps['gap']
  align?: BoxProps['alignItems']
  component?: ElementType
}
export function Stack({
  children,
  space = 's',
  align,
  component,
}: Props): JSX.Element {
  return (
    <Box
      className={styles.stack}
      gap={space}
      component={component}
      alignItems={align}
    >
      {children}
    </Box>
  )
}
