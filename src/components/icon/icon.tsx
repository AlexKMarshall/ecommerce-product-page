import * as styles from './icon.css'

import { Cart, Close, Delete, Menu, Minus, Next, Plus, Previous } from './icons'

const icons = {
  cart: Cart,
  close: Close,
  delete: Delete,
  menu: Menu,
  minus: Minus,
  next: Next,
  plus: Plus,
  previous: Previous,
}

export type Icon = keyof typeof icons

type Props = {
  icon: Icon
  size?: 'xs' | 's' | 'm' | 'l'
}
export function Icon({ icon, size: width = 'm' }: Props): JSX.Element {
  const SVGComponent = icons[icon]

  return (
    <span className={styles.wrapper[width]}>
      <SVGComponent />
    </span>
  )
}
