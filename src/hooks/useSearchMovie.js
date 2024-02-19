import { useEffect, useState } from "react"
import { fetchData } from "../utils/apiUtils"
import { useLoaderContext } from "../contexts/LoaderContext"
import { getQueryParams } from "../utils/getQueryParams"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

function useSearchMovie() {
  const [movies, setMovies] = useState([])
  const { handleLoading } = useLoaderContext()
  
  const { query, page } = getQueryParams(true, true)

  useEffect(() => {
    const getSearchedMovies = async(url) => {
      handleLoading(true)
      const data = await fetchData(url)

      setMovies(data)
      handleLoading(false)
    }

    const searchQueryURL = `${searchURL}?query=${query}&${apiKey}&page=${page || 1}`
    getSearchedMovies(searchQueryURL)
  }, [searchURL, apiKey, query, page])

  return movies
}

export default useSearchMovie