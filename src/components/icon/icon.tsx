import { Cart, Menu, Minus, Plus } from './icons'

const icons = {
  cart: Cart,
  menu: Menu,
  minus: Minus,
  plus: Plus,
}

type Props = { icon: keyof typeof icons }
export function Icon({ icon }: Props): JSX.Element {
  const SVGComponent = icons[icon]

  return <SVGComponent />
}
