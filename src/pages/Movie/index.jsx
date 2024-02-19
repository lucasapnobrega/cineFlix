import { BsGraphUp, BsHourglassSplit, BsInfoCircleFill   } from "react-icons/bs"
import { FaRegMoneyBill1  } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { useParams } from "react-router-dom"
import {  Container } from "react-bootstrap";
import MovieCard from "../../components/Card/MovieCard"
import useMovie from "../../hooks/useMovie"
import InfoCard from "../../components/Card/InfoCard";
import useCast from "../../hooks/useCast";
import ActorCard from "../../components/Card/ActorCard";
import Trailer from "../../components/Trailer";
import ButtonBack from "../../components/ButtonBack";

import styles from './Movie.module.css'

export default function Movie() {
  const { id } = useParams()
  const movie = useMovie(id)
  const cast = useCast(id)

  return (
    <main className={styles.moviePage}>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} isBanner={true}/>

          <p className={styles.tagline}>"{movie.tagline}"</p>
          <Container className={styles.wrapperInfo}>
            <div data-aos='fade-right' data-aos-duration='1000'>
              <InfoCard name="Gênero" movieProp={movie.genres} Icon={BsInfoCircleFill} needLoop={true}/>
              <InfoCard name="Orçamento" movieProp={movie.budget} Icon={FaRegMoneyBill1} isNumber={true}/>
              <InfoCard name="Receita" movieProp={movie.revenue} Icon={BsGraphUp} isNumber={true}/>
              <InfoCard name="Duração" movieProp={movie.runtime} Icon={BsHourglassSplit}/>
              <InfoCard name="Descrição" movieProp={movie.overview} Icon={MdDescription}/>
            </div>

            <Trailer id={id}/>

            <h3 className={styles.titleMainCast}>Elenco principal</h3>
            <div className={styles.cast}>
              {cast && cast.map(actor => (
                <ActorCard actor={actor} key={actor.id}/>
              ))}
            </div>

            <ButtonBack/>
          </Container>
        </>
      )}
    </main>
  )
}