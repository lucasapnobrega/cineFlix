import { createContext, useContext, useState } from "react";
import { scrollToTop, scrollToBottom } from "../utils/scrollToTopBottom";
import { useNavigate } from "react-router-dom";
import { getQueryParams } from '../utils/getQueryParams'

export const PaginationContext = createContext()

export function PaginationContextProvider({ children }) {
  const [isFirst, setIsFirst] = useState(true)
  const [isLast, setIsLast] = useState(false)

  const navigate = useNavigate()
  const { query, page } = getQueryParams(true, true)

  const previousPage = (genreId) => {
    if(page == 2) setIsFirst(true)
    if(page == 1) return

    scrollToBottom()
    setIsLast(false)
    navigateToPage(-1, genreId)
  }

  const nextPage = (genreId, totalPages) => {
    if(page == totalPages - 1) setIsLast(true)
    if(page == totalPages) return

    scrollToTop()
    setIsFirst(false)
    navigateToPage(1, genreId)
  }

  const navigateToPage = (delta, genreId) => {
    const newPage = Number(page) + delta

    if(genreId) navigate(`/moviesGenre?id=${genreId}&page=${newPage}`)
    else navigate(`/search?q=${query}&page=${newPage}`)
  }

  const pagination = {
    previousPage,
    nextPage,
    isFirst,
    isLast,
    setIsFirst,
    setIsLast
  }

  return (
    <PaginationContext.Provider value={pagination}>
      {children}
    </PaginationContext.Provider>
  )
}

export function usePaginationContext() {
  const context = useContext(PaginationContext)
  if(!context) {
    throw new Error("usePaginationContext should be used whitin a PaginationContextProvider")
  }

  return context
}