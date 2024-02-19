import { useParams } from "react-router-dom";
import { formatCurrency } from "../../../utils/apiUtils";
import useMovie from "../../../hooks/useMovie";

import styles from './InfoCard.module.css'
import time from "../../../utils/time";

function InfoCard({ name, movieProp, Icon, isNumber = false, needLoop = false }) {
  const { id } = useParams()
  const movie = useMovie(id)

  let lengthGenres
  if(movie) lengthGenres = movie.genres.length

  return (
    <div className={styles.info}>
      <h3><Icon /> {name}:</h3>

      {isNumber ? (
        <p>{formatCurrency(movieProp)}</p>
      ) : needLoop ? (
        movieProp.map((genre, count) => (
          <span key={count}>
            {lengthGenres - 1 === count ? `${genre.name}` : `${genre.name} | `}
          </span>
        ))
      ) : (
        <p>{name === 'Duração' ? time(movieProp) : movieProp}</p>
      )}
    </div>
  )
}

export default InfoCard