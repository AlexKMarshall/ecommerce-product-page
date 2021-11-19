import * as styles from './product.css'

import {
  Box,
  Button,
  Cluster,
  NumberField,
  Pill,
  Stack,
  Text,
} from 'src/components'

import Image from 'next/image'
import Link from 'next/link'
import productImage1 from 'public/image-product-1.jpg'
import { useCart } from '..'
import { useState } from 'react'

type Props = {
  brand: {
    name: string
    url: string
  }
  name: string
  description: string
  price: number
  discountPercent?: number
  oldPrice?: number
}
export function Product({
  brand,
  name,
  description,
  price: priceProp,
  discountPercent: discountPercentProp,
  oldPrice: oldPriceProp,
}: Props): JSX.Element {
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const price = priceFormatter.format(priceProp)
  const discountPercent = discountPercentProp ? `${discountPercentProp}%` : null
  const oldPrice = oldPriceProp ? priceFormatter.format(oldPriceProp) : null

  const [quantitySelected, setQuantitySelected] = useState(1)
  const { addItem } = useCart()

  const addToCart = () =>
    addItem({ product: { name, price: priceProp }, quantity: quantitySelected })

  return (
    <>
      <Box>
        <Image
          src={productImage1}
          alt="tan and white sneakers on orange background"
          priority
        />
      </Box>
      <Box padding="l">
        <Stack space="xl">
          <Stack>
            <Link href={brand.url}>
              <a className={styles.brand}>{brand.name}</a>
            </Link>
            <Text component="h1" size="xl" weight="bold" color="primary">
              {name}
            </Text>
            <p>{description}</p>
          </Stack>
          <Cluster justify="space-between" align="baseline">
            <Cluster space="2xs">
              <Text size="xl" weight="bold" color="primary" inline>
                {price}
              </Text>
              {discountPercent ? <Pill>{discountPercent}</Pill> : null}
            </Cluster>
            {oldPrice ? (
              <Text component="p" color="muted">
                <s>{oldPrice}</s>
              </Text>
            ) : null}
          </Cluster>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack space="xs">
              <NumberField
                id="quantity"
                label="Quantity"
                aria-label="Quantity"
                min={1}
                value={quantitySelected}
                onChange={setQuantitySelected}
              />
              <Button type="submit" onClick={addToCart} icon="cart" shadow>
                Add to cart
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  )
}
