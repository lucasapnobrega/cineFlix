import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { othersGenresObj } from "../../../utils/genresObj";

import styles from './GenreCard.module.css'

export default function GenreCard({ genreId }) {
  const genre = othersGenresObj.find(genre => genre.id === genreId)

  return (
    <Link to={`/moviesGenre?id=${genreId}&page=1`} title={`Exibir todos os filmes do gênero "${genre.name}"`}>
      <div className={styles.cardGenre}>
        <div className={styles.cardGenreIcon}>
          <genre.icon />
        </div>

        <div className={styles.cardGenreInfo}>
          <span className="bold">{genre.name}</span>
          <span className={styles.seeAll}>Exibir tudo <FaArrowRight /></span>
        </div>
      </div>
    </Link>
  )
}