import { FaTrophy } from "react-icons/fa6";
import { Container } from "react-bootstrap";
import useTopRatedMovies from "../../hooks/useTopRatedMovies"
import MovieCard from "../../components/Card/MovieCard"

import stylesShared from '../../css/sharedStyles/Card/Card.module.css'

export default function TopRated() {
  const topMovies = useTopRatedMovies()

  return (
    <main>
      <Container>
        <h2 className={stylesShared.title}>Melhores Ranqueados <FaTrophy/></h2>
        
        <div className={stylesShared.moviesContainer}>
          {topMovies.length > 0 && topMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </Container>
    </main>
  )
}