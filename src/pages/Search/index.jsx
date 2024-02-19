import { useEffect, useState } from 'react';
import { useLoaderContext } from '../../contexts/LoaderContext';
import { Container } from 'react-bootstrap';
import { getQueryParams } from '../../utils/getQueryParams';
import MovieCard from '../../components/Card/MovieCard'
import useSearchMovie from '../../hooks/useSearchMovie'
import NotFound from '../../components/NotFound';
import Pagination from '../../components/Pagination';

import stylesShared from '../../css/sharedStyles/Card/Card.module.css'

export default function Search() {
  const { query } = getQueryParams(true)
  
  const { loading } = useLoaderContext()
  const movies = useSearchMovie()
  
  const [showNotFound, setShowNotFound] = useState(false)
  
  useEffect(() => {
    setShowNotFound(false)

    const timeoutId = setTimeout(() => {
      if(!loading && movies.results.length === 0) setShowNotFound(true)
    }, 100)
    
    return () => clearTimeout(timeoutId)
  }, [loading, query, movies])

  return (
    <main className={`${stylesShared.container}`}>
      <Container>
        {movies.results && movies.results.length > 0 && (
          <h2 className={stylesShared.title}>
            Resultados para: <span className={stylesShared.queryText}>{query}</span>
          </h2>
        )}
        
        <div className={`moviesContainerSearch ${stylesShared.moviesContainer}`}>
          {movies.results && movies.results.length > 0 && movies.results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {showNotFound && <NotFound title={`Oops.. Parece que não encontramos nenhum filme com o título "${query}" =/`}/>}

        {movies.results && !showNotFound && <Pagination movies={movies}/>}
      </Container>
    </main>
  )
}