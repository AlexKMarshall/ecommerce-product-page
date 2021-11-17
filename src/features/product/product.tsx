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

type Props = {}
export function Product(props: Props): JSX.Element {
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
            <Link href="/">
              <a className={styles.brand}>Sneaker Company</a>
            </Link>
            <Text component="h1" size="xl" weight="bold" color="primary">
              Fall Limited Edition Sneakers
            </Text>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </Stack>
          <Cluster justify="space-between" align="baseline">
            <Cluster space="2xs">
              <Text size="xl" weight="bold" color="primary" inline>
                $125.00
              </Text>
              <Pill>50%</Pill>
            </Cluster>
            <Text component="p" color="muted">
              <s>$250.00</s>
            </Text>
          </Cluster>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack space="xs">
              <NumberField
                aria-label="Quantity"
                minValue={0}
                defaultValue={0}
              />
              <Button type="submit" onClick={() => {}}>
                Add to cart
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  )
}
