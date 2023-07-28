import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
})
export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
    <Navbar />
    <Component {...pageProps} />
  </main>
}
