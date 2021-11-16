/* eslint-disable @next/next/no-img-element */
import { Box, Cluster, Icon, IconButton } from 'src/components'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import type { NextPage } from 'next'
import productImage1 from 'public/image-product-1.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fall Limited Edition Sneakers</title>
        <meta name="description" content="Sample E-Commerce Product Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Box component="header" padding="l">
        <Cluster space="xs" justify="space-between">
          <Cluster space="xs">
            <IconButton>
              <Icon icon="menu" />
            </IconButton>
            <Image src={Logo} alt="Sneakers" />
          </Cluster>

          <Cluster space="xs">
            <IconButton>
              <Icon icon="cart" />
            </IconButton>
            <IconButton>
              <img
                src="/image-avatar.png"
                alt="profile"
                width="24"
                height="24"
              />
            </IconButton>
          </Cluster>
        </Cluster>
      </Box>
      <main>
        <Box>
          <Image
            src={productImage1}
            alt="tan and white sneakers on orange background"
            priority
          />
        </Box>
        <Link href="/">Sneaker Company</Link>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p>
          $125.00
          <span>50%</span>
        </p>
        <p>
          <s>$250.00</s>
        </p>
        <form>
          <button type="button">-</button>
          <input type="number" defaultValue={0} />
          <button type="button">+</button>
          <button type="submit">Add to cart</button>
        </form>
      </main>
    </>
  )
}

export default Home
