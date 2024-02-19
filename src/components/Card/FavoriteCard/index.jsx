import { useState } from "react"
import { useFavoritesContext } from "../../../contexts/FavoritesContext"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa6";
import getYear from "../../../utils/getYear";
import defaultImage from '../../../assets/default-image.png'

import styles from './CardFavorite.module.css'

const imageURL = import.meta.env.VITE_IMG

export default function CardFavorites({ movie }) {
  const { handleFavoritesMovies } = useFavoritesContext()
  const [hovered, setHovered] = useState(false)

  return (
    <div 
      className={`${styles.movieCard} ${hovered && styles.bgCard}`} 
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: hovered && `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      {!hovered && (
        <img 
          src={`${movie.poster_path ? `${imageURL}${movie.poster_path}` : `${defaultImage}`}`} 
          alt={movie.title}
          className={styles.imgMoviePage}
          onMouseEnter={() => setHovered(true)}
        />
      )}

      <div className={`${styles.cardContent}`}>
        <h2 data-aos='flip-up' data-aos-duration='750'>{movie.title} - {getYear(movie.release_date)} </h2>
        <div className={styles.wrapperStarFavorite}>
          <p className={styles.star}><FaStar /> {movie.vote_average.toFixed(1)}</p>
          <FaHeart
            onClick={() => handleFavoritesMovies(movie)}
            className={`${'iconHeart'} ${'favoriteIcon'}`}
            title="Remover dos favoritos"
          />
        </div>

        <p className={styles.description}><span>Descrição:</span> {movie.overview}</p>

        <Link to={`/movie/${movie.id}`}>Detalhes</Link>
      </div>
    </div>
  )
}