import { Box, BoxProps } from '..'
import { ElementType, ReactNode } from 'react'

type Props = {
  children: ReactNode
  component?: ElementType
  size?: BoxProps['fontSize']
  weight?: BoxProps['fontWeight']
  inline?: boolean
}
export function Text({
  children,
  component = 'span',
  size,
  weight,
  inline,
}: Props): JSX.Element {
  return (
    <Box
      component={component}
      fontSize={size}
      fontWeight={weight}
      {...(inline && { display: 'inline' })}
    >
      {children}
    </Box>
  )
}
