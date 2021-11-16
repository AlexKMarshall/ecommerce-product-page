import { Cart, Menu } from './icons'

const icons = {
  cart: Cart,
  menu: Menu,
}

type Props = { icon: keyof typeof icons }
export function Icon({ icon }: Props): JSX.Element {
  const SVGComponent = icons[icon]

  return <SVGComponent />
}
