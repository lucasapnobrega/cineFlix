import { useSearchParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { allGenresObj } from "../../utils/genresObj" 
import { useLoaderContext } from "../../contexts/LoaderContext"
import useGenre from "../../hooks/useGenre"
import MovieCard from "../../components/Card/MovieCard"
import Pagination from "../../components/Pagination"

import stylesShared from '../../css/sharedStyles/Card/Card.module.css'

export default function MovieGenre() {
  const { loading } = useLoaderContext()
  const [searchParams] = useSearchParams()
  const genreId = searchParams.get('id')
  const movies = useGenre(genreId)
  const genre = allGenresObj.find(genre => genre.id === +genreId)

  return (
    <main>
      <Container>
        <h2 className={stylesShared.title}>Filmes de <span className="colorRed">{genre.name}</span></h2>

        <div className={stylesShared.moviesContainer}>
          {movies.results && movies.results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {!loading && (
          <Pagination movies={movies} genreId={genreId}/>
        )}
      </Container>
    </main>
  )
}