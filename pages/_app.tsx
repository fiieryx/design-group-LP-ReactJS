import '../styles/globals.css'
import ScrollObserver from '../components/props/scroll-observer'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  )

}

export default MyApp
