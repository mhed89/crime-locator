import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './FavoriteButton.module.scss'

export default function FavoriteButton({ post }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // TODO: Implement localStorage or API call to save favorites
  }

  return (
    <button
      className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
      onClick={toggleFavorite}
      aria-label="Toggle favorite"
    >
      <FontAwesomeIcon icon={farHeart} />
    </button>
  )
}