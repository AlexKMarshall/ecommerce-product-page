import { Box, Center } from 'src/components'
import { Header, Product } from 'src/features'

import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

function Home({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="Sample E-Commerce Product Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Center>
        <Header />
        <Box component="main" paddingBottom="2xl">
          <Product {...product} />
        </Box>
      </Center>
    </>
  )
}

export default Home

export async function getStaticProps() {
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

  return {
    props: { product },
  }
}
