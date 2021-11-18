import * as styles from './cart.css'

import { Icon, IconButton } from 'src/components'
import {
  OverlayContainer,
  OverlayProvider,
  useModal,
  useOverlay,
  usePreventScroll,
} from '@react-aria/overlays'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { Stack, Text } from 'src/components'

import { FocusScope } from '@react-aria/focus'
import Link from 'next/link'
import { useButton } from '@react-aria/button'
import { useDialog } from '@react-aria/dialog'
import { useOverlayTriggerState } from '@react-stately/overlays'
import { useRef } from 'react'

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
      totalQuantity: items
        .map((item) => item.quantity)
        .reduce((acc, cur) => acc + cur, 0),
    }),
    [items]
  )

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

type Props = {}
export function Cart(props: Props): JSX.Element {
  const { totalQuantity, items } = useCart()
  const state = useOverlayTriggerState({})
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const { buttonProps: openButtonProps } = useButton(
    { onPress: () => state.open() },
    openButtonRef
  )
  const { buttonProps: closeButtonProps } = useButton(
    { onPress: () => state.close() },
    closeButtonRef
  )

  return (
    <>
      <IconButton
        onClick={() => {}}
        color="primary"
        {...openButtonProps}
        label="View Shopping Cart"
        badgeValue={totalQuantity}
      >
        <Icon icon="cart" size="l" />
      </IconButton>
      {state.isOpen ? (
        <OverlayContainer>
          <Dialog title="Cart" isOpen isDismissable onClose={state.close}>
            <div className={styles.cartContents}>
              {items.length > 0 ? null : (
                <Text weight="bold" alignSelf="center">
                  Your cart is empty.
                </Text>
              )}
            </div>
          </Dialog>
        </OverlayContainer>
      ) : null}
    </>
  )
}

type DialogProps = {
  isOpen?: boolean
  onClose?: () => void
  /**
   * Whether to close the overlay when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean
  title?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  children: ReactNode
  className?: string
}

const defaultProps: Partial<Props> = {
  isDismissable: true,
}

export function Dialog(props: DialogProps): JSX.Element {
  const propsWithDefaults = { ...defaultProps, ...props }
  const ref = useRef<HTMLDivElement>(null)
  const { overlayProps, underlayProps } = useOverlay(propsWithDefaults, ref)
  usePreventScroll()
  const { modalProps } = useModal()
  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <div {...underlayProps} className={styles.underlay}>
      <FocusScope contain restoreFocus autoFocus>
        <section
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className={styles.overlay}
        >
          <header className={styles.cartHeader}>
            <Text component="h2" weight="bold" color="primary">
              {props.title}
            </Text>
          </header>
          {props.children}
        </section>
      </FocusScope>
    </div>
  )
}
