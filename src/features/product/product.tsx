import * as styles from './product.css'

import { Box, Button, Cluster, Stack, Text } from 'src/components'

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
            <Text component="h1" size="xl" weight="bold">
              Fall Limited Edition Sneakers
            </Text>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </Stack>
          <Cluster justify="space-between" align="baseline">
            <p>
              <Text size="xl" weight="bold" inline>
                $125.00
              </Text>
              <span>50%</span>
            </p>
            <p>
              <s>$250.00</s>
            </p>
          </Cluster>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack space="xs">
              <div>
                <button type="button">-</button>
                <input type="number" defaultValue={0} />
                <button type="button">+</button>
              </div>
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
