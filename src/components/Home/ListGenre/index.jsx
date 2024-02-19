import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { mainGenresObj } from "../../../utils/genresObj"; 
import { useMediaQuery } from "react-responsive";
import breakpointsSwiper from "../../../utils/breakpointsSwiper";
import useGenre from "../../../hooks/useGenre"
import getYear from "../../../utils/getYear";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './ListGenre.module.css'

const imageURL = import.meta.env.VITE_IMG

export default function ListGenre({ genreId }) {
  const movies = useGenre(genreId)
  const breakpoints = breakpointsSwiper()
  const genre = mainGenresObj.find(genre => genre.id === genreId)
  const isDesktop = useMediaQuery({ minWidth: 1200 })

  return (
    <div>
      <div className={styles.titleAndButton}>
        <h2>Filmes de <span className="colorRed">{genre.name}</span></h2>

        <Link to={`moviesGenre?id=${genreId}&page=1`}>Ver todos</Link>
      </div>

      <Swiper breakpoints={breakpoints} modules={[Pagination, Navigation]} navigation={true}>
        {movies.results && movies.results.map(movie => (
          <SwiperSlide className={styles.cardGenre} key={movie.id}>
            <Link to={`movie/${movie.id}`} className={styles.linkMovieGenre} title="Ver detalhes do filme">
              <div className={styles.containerImg}>
                <img src={`${imageURL}${movie.poster_path}`} alt={movie.title}/>
              </div>
              
              <div className={styles.cardGenreInfo}>
                <span className="bold">
                  {!isDesktop && movie.title.length > 35 ? `${movie.title.substring(0, 35)} ...` : movie.title} - {getYear(movie.release_date)}
                </span>
                <span className="star"><FaStar /> {movie.vote_average.toFixed(1)}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}