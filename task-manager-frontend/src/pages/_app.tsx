import Navbar from '@/components/Navbar'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@/app/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
