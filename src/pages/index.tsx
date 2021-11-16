import { Header, Product } from 'src/features'

import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fall Limited Edition Sneakers</title>
        <meta name="description" content="Sample E-Commerce Product Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />
      <main>
        <Product />
      </main>
    </>
  )
}

export default Home
