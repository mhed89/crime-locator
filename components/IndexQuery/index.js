import React from 'react'
import useSWR from 'swr'
import CrimePost from '../CrimePost'
import Header from '../Header'

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
})

export default function IndexQuery() {
  const { data, error, isLoading } = useSWR(
    'https://brottsplatskartan.se/api/events? app=crimelocator',
    fetcher,
  )

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          Idag begick servern ett brott.  Kunde inte hämta data.
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="text-center p-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Laddar brottsdata...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header title={'Senaste händelserna Nationellt'} />
      <div className={`container`}>
        <div className={`row`}>
          {data?. data?.map((crime) => {
            if (! crime. id) {
              return null
            }
            return <CrimePost data={crime} key={crime.id} />
          })}
        </div>
      </div>
    </>
  )
}