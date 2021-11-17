import * as styles from './text.css'

import { Box, BoxProps } from '..'
import { ElementType, ReactNode } from 'react'

type Props = {
  children: ReactNode
  component?: ElementType
  size?: BoxProps['fontSize']
  weight?: BoxProps['fontWeight']
  inline?: boolean
  color?: 'primary' | 'secondary' | 'muted'
}
export function Text({
  children,
  component = 'span',
  size,
  weight,
  inline,
  color,
}: Props): JSX.Element {
  const colorClassName = color ? styles.color({ color }) : ''
  return (
    <Box
      component={component}
      fontSize={size}
      fontWeight={weight}
      {...(inline && { display: 'inline' })}
      className={colorClassName}
    >
      {children}
    </Box>
  )
}
