import 'src/styles/reset.css'
import 'src/styles/global.css'

import type { AppProps } from 'next/app'
import { CartProvider } from 'src/features'
import { OverlayProvider } from '@react-aria/overlays'
import { SSRProvider } from '@react-aria/ssr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <OverlayProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </OverlayProvider>
    </SSRProvider>
  )
}

export default MyApp
