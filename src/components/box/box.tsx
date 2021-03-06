import { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

import { sprinkles } from 'src/styles/sprinkles.css'

type Sprinkles = Parameters<typeof sprinkles>[0]

export type BoxProps = Omit<AllHTMLAttributes<HTMLElement>, 'className'> &
  Sprinkles & {
    component?: ElementType
    className?: ClassValue
    children: ReactNode
  }
export function Box({
  component: Component = 'div',
  className: classNameProp,
  children,
  ...props
}: BoxProps): JSX.Element {
  const sprinkleProps: Record<string, unknown> = {}
  const nativeProps: Record<string, unknown> = {}

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinkleProps[key] = props[key as keyof typeof props]
    } else {
      nativeProps[key] = props[key as keyof typeof props]
    }
  }

  const sprinkleClassNames = sprinkles(sprinkleProps)
  const classNames = clsx(sprinkleClassNames, classNameProp)

  return (
    <Component className={classNames} {...nativeProps}>
      {children}
    </Component>
  )
}
