import { useEffect } from "react"
import { usePaginationContext } from "../../contexts/PaginationContext"
import { useLocation } from "react-router-dom"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { getQueryParams } from "../../utils/getQueryParams";

import styles from './Pagination.module.css'

export default function Pagination({ movies, genreId }) {
  const { previousPage, nextPage, isFirst, isLast, setIsFirst, setIsLast } = usePaginationContext()
  const { pathname } = useLocation()

  const { query, page } = getQueryParams(true, true)

  useEffect(() => {
    setIsFirst(false)
    setIsLast(false)

    if(page == 1) setIsFirst(true)
    if(movies.total_pages == 1) setIsLast(true)
    if(page == movies.total_pages) setIsLast(true)

  } ,[pathname, query, movies.total_pages])
  
  return (
    <div className={styles.btnPaginationWrapper}>
      <FaAngleLeft 
        onClick={() => previousPage(genreId)} 
        className={isFirst && styles.iconBlocked}
      />

      <span>Página {page} de {movies.total_pages}</span>

      <FaAngleRight 
        onClick={() => nextPage(genreId, movies.total_pages)} 
        className={isLast && styles.iconBlocked}
      />
    </div>
  )
}