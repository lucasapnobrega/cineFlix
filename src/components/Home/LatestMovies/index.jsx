import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLatestMovies from "../../../hooks/useLatestMovies"
import getYear from "../../../utils/getYear";

import styles from './LatestMovies.module.css'
import Trailer from "../../Trailer";

const apiKey = import.meta.env.VITE_API_KEY
const imageURL = import.meta.env.VITE_IMG

export default function LatestMovies() {
  const movies = useLatestMovies(apiKey)

  return (
    <div className={styles.cardLatestWrapper}>
      {movies && movies.map(movie => (
        <div className={styles.cardLatest} key={movie.id}>
          <Link to={`/movie/${movie.id}`} title={`Ver detalhes do filme ${movie.title}`}>
            <img src={`${imageURL}${movie.poster_path}`} alt={movie.title} />
          </Link>

          <div className={styles.cardLatestInfo}>
            <h3>{movie.title}</h3>

            <div className={styles.infoWrapper}>
              <span title="Ano de lançamento"><FaCalendarAlt /> {getYear(movie.release_date)}</span>
              <Trailer id={movie.id} latestMovies={true}/>
              <span title="Popularidade"><FaPeopleGroup /> {movie.popularity.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}