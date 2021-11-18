import { Icon, IconButton } from 'src/components'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

type Product = { name: string; price: number }
type ProductInCart = { product: Product; quantity: number }
type CartContext = {
  items: ProductInCart[]
  addItem: (item: ProductInCart) => void
  removeItem: (name: Product['name']) => void
  totalQuantity: number
}
const CartContext = createContext<CartContext | undefined>(undefined)

export function useCart(): CartContext {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a <CartProvider>')
  }
  return context
}

export function CartProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [items, setItems] = useState<ProductInCart[]>([])
  const contextValue = useMemo(
    () => ({
      items,
      addItem: (item: ProductInCart) => {
        setItems((oldItems) => {
          const cartIncludesItem = oldItems.some(
            (oldItem) => oldItem.product.name === item.product.name
          )
          if (cartIncludesItem) {
            return oldItems.map((oldItem) =>
              oldItem.product.name === item.product.name
                ? { ...oldItem, quantity: oldItem.quantity + item.quantity }
                : oldItem
            )
          }
          return [...oldItems, item]
        })
      },
      removeItem: (name: Product['name']) => {
        setItems((oldItems) =>
          oldItems.filter((oldItem) => oldItem.product.name !== name)
        )
      },
      totalQuantity: items.length,
    }),
    [items]
  )

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

type Props = {}
export function Cart(props: Props): JSX.Element {
  const { totalQuantity } = useCart()
  return (
    <IconButton
      onClick={() => {}}
      color="primary"
      label="View Shopping Cart"
      badgeValue={totalQuantity}
    >
      <Icon icon="cart" size="l" />
    </IconButton>
  )
}
