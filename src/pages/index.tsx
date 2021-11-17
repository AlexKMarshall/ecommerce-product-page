import { Header, Product } from 'src/features'

import { Box } from 'src/components'
import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
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
  return (
    <>
      <Head>
        <title>Fall Limited Edition Sneakers</title>
        <meta name="description" content="Sample E-Commerce Product Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />
      <Box component="main" paddingBottom="2xl">
        <Product {...product} />
      </Box>
    </>
  )
}

export default Home
