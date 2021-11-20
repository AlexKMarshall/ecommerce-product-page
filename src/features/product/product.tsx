import * as styles from './product.css'

import {
  Box,
  Button,
  Cluster,
  Icon,
  IconButton,
  NumberField,
  Pill,
  Stack,
  Text,
} from 'src/components'
import { useMemo, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { clamp } from 'src/utils/clamp'
import productImage1 from 'public/image-product-1.jpg'
import productImage2 from 'public/image-product-2.jpg'
import productImage3 from 'public/image-product-3.jpg'
import productImage4 from 'public/image-product-4.jpg'
import { useCart } from '..'

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
]

function useCarousel<T>(items: T[]) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const firstIndex = 0
  const lastIndex = items.length - 1
  const previousIndex =
    selectedIndex - 1 < firstIndex ? lastIndex : selectedIndex - 1
  const nextIndex =
    selectedIndex + 1 > lastIndex ? firstIndex : selectedIndex + 1
  return useMemo(
    () => ({
      selectPrevious: () => setSelectedIndex(previousIndex),
      selectNext: () => setSelectedIndex(nextIndex),
      selectIndex: (index: number) =>
        setSelectedIndex(clamp(index, { min: firstIndex, max: lastIndex })),
      selectedItem: items[selectedIndex],
      previousItem: items[previousIndex],
      nextItem: items[nextIndex],
      selectedIndex,
      nextIndex,
      previousIndex,
    }),
    [items, lastIndex, nextIndex, previousIndex, selectedIndex]
  )
}

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
    addItem({
      product: {
        name,
        price: priceProp,
        thumbnail: '/image-product-1-thumbnail.jpg',
      },
      quantity: quantitySelected,
    })

  const carousel = useCarousel(productImages)

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.imageSlider}>
        <Image
          src={carousel.previousItem}
          alt=""
          key={carousel.previousIndex}
          className={styles.carouselImage({ position: 'previous' })}
        />
        <Image
          src={carousel.selectedItem}
          alt=""
          priority
          key={carousel.selectedIndex}
          className={styles.carouselImage({ position: 'current' })}
        />
        <Image
          src={carousel.nextItem}
          alt=""
          key={carousel.nextIndex}
          className={styles.carouselImage({ position: 'next' })}
        />
        <Box padding="m" display="grid">
          <Cluster justify="space-between">
            <IconButton
              label="Previous Image"
              onClick={carousel.selectPrevious}
            >
              <Icon icon="previous" size="xs" />
            </IconButton>
            <IconButton label="Next Image" onClick={carousel.selectNext}>
              <Icon icon="next" size="xs" />
            </IconButton>
          </Cluster>
        </Box>
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
    </Box>
  )
}
