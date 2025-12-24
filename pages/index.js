import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationQuery from '../components/LocationQuery'
import IndexQuery from '../components/IndexQuery'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crime Locator</title>
        <meta name="description" content="Swedish crime reports locator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header title="Crime Locator" />
      <LocationQuery />
      <IndexQuery />
      <Footer />
    </>
  )
}