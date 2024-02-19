import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { useFavoritesContext } from "../../../contexts/FavoritesContext";
import getYear from "../../../utils/getYear";
import defaultImage from '../../../assets/default-image.png'
import MessageFavorite from "../../MessageFavorite";

import styles from '../../../css/sharedStyles/Card/Card.module.css'
import stylesBannerMovie from "../../../utils/stylesBannerMovie";

const imageURL = import.meta.env.VITE_IMG

function MovieCard({ movie, showLink = true, isBanner = false }) {
  const { favorites, handleFavoriteMessage } = useFavoritesContext()
  const [showMessage, setShowMessage] = useState("")

  const haveFavorite = favorites.find(fav => fav.id === movie.id)

  const bannerMovie = stylesBannerMovie(movie)

  return (
    <div className={`${styles.movieCard} ${!movie.poster_path && styles.movieCardMargin}`}>
      {isBanner && movie.poster_path ? (
        <div style={bannerMovie}></div>
      ) : (
        <img 
          src={`${movie.poster_path ? `${imageURL}${movie.poster_path}` : `${defaultImage}`}`} 
          alt={movie.title}
          className={`${!showLink && styles.imgMoviePage}`}
        /> 
      )}

      {showLink ? (
        <h2>{movie.title}</h2>
      ) : (
        <h2 className={styles.titleAndYear}>{movie.title} - {getYear(movie.release_date)}</h2>
      )}
      
      <div className={`${styles.wrapperStarFavorite} wrapperStarFav`}>
        <p className='star'><FaStar /> {movie.vote_average.toFixed(1)}</p>
        <FaHeart
          onClick={() => handleFavoriteMessage(movie, haveFavorite, setShowMessage)}
          className={`iconHeart ${haveFavorite ? "favoriteIcon" : ""}`}
          title={haveFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        />
      </div>
      
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}

      {showMessage !== "" && <MessageFavorite message={showMessage} movieTitle={movie.title}/>}
    </div>
  )
}

export default MovieCard