import { render, screen } from '@testing-library/react'

import { CartProvider } from '..'
import { Product } from '.'
import userEvent from '@testing-library/user-event'

test('displays product information', () => {
  const product = {
    brand: {
      name: 'Sneaker Company',
      url: '/',
    },
    name: 'Fall Limited Edition Sneakers',
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 125,
    discountPercent: 50,
    oldPrice: 250,
  }

  render(
    <CartProvider>
      <Product {...product} />
    </CartProvider>
  )

  expect(
    screen.getByRole('link', { name: product.brand.name })
  ).toHaveAttribute('href', product.brand.url)

  expect(
    screen.getByRole('heading', { name: product.name })
  ).toBeInTheDocument()

  expect(screen.getByText(product.description)).toBeInTheDocument()

  const priceFormmater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  expect(
    screen.getByText(priceFormmater.format(product.price))
  ).toBeInTheDocument()
  expect(screen.getByText(`${product.discountPercent}%`)).toBeInTheDocument()

  const quantityField = screen.getByLabelText('Quantity')
  expect(quantityField).toHaveValue('0')

  const increaseQty = screen.getByRole('button', {
    name: /increase quantity/i,
  })
  const decreaseQty = screen.getByRole('button', {
    name: /decrease quantity/i,
  })

  userEvent.click(decreaseQty)
  expect(quantityField).toHaveValue('0')
  userEvent.click(increaseQty)
  expect(quantityField).toHaveValue('1')
  userEvent.click(increaseQty)
  expect(quantityField).toHaveValue('2')
  userEvent.click(decreaseQty)
  expect(quantityField).toHaveValue('1')

  expect(
    screen.getByRole('button', { name: /add to cart/i })
  ).toBeInTheDocument()
})
