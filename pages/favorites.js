import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FavoritePost from '../components/FavoritePost'

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Favorites - Crime Locator</title>
      </Head>
      <Header title="Favoriter" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Favoritfunktionen kommer snart... </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}