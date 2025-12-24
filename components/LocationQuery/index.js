import React, { useState } from 'react'
import useSWR from 'swr'
import CrimePost from '../CrimePost'
import Header from '../Header'
import styles from './LocationQuery.module.scss'

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
})

export default function LocationQuery() {
  const [city, setCity] = useState('Stockholm')
  const [input, setInput] = useState('')

  const { data, error, isLoading } = useSWR(
    `https://brottsplatskartan.se/api/events/? location=${city}`,
    fetcher,
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setCity(input)
    }
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          Idag begick servern ett brott. Kunde inte hämta data.
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
    <div>
      <Header title={`Senast rapporterat i`} location={city} />
      <div className={`container-fluid ${styles.searchSection}`}>
        <div className={`row justify-content-center`}>
          <div className={`col-md-6`}>
            <form className={`${styles.searchInput}`} onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e. target.value)
                }}
                placeholder="Sök efter område"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data?.data?.map((crime) => {
            if (!crime.id) {
              return null
            }
            return <CrimePost data={crime} key={crime.id} />
          })}
        </div>
      </div>
    </div>
  )
}