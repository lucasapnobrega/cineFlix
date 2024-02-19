import { Container } from "react-bootstrap"
import { mainGenresObj, othersGenresObj } from "../../utils/genresObj"
import { useEffect, useRef } from "react"
import { useScrollContext } from "../../contexts/ScrollContext"
import ListGenre from "../../components/Home/ListGenre"
import TitleLine from '../../components/Home/TitleLine'
import LatestMovies from "../../components/Home/LatestMovies"
import GenreCard from "../../components/Card/genreCard"
import Streamings from "../../components/Home/Streamings"

import styles from './Home.module.css'

export default function Home() {
  const { scrollToGenres, setScrollToGenres } = useScrollContext()
  const genresRef = useRef(null)

  useEffect(() => {
    if(scrollToGenres && genresRef.current) {
      genresRef.current.scrollIntoView({ behavior: 'smooth' })
      setScrollToGenres(false)
    }
  }, [scrollToGenres])

  return (
    <main>
      <Container>
        <Streamings />

        <div className={styles.moviesGenresWrapper} ref={genresRef}>
          {mainGenresObj.map(genre => <ListGenre genreId={genre.id} key={genre.id}/>)}
        </div>
        
        <TitleLine title="Outros Gêneros"/>
        <div className={styles.genreCards}>
          {othersGenresObj.map(genre => <GenreCard genreId={genre.id} key={genre.id}/>)}
        </div>

        <TitleLine title="Lançamentos"/>
        <LatestMovies />
      </Container>
    </main>
  )
}