import { useEffect, useState } from "react";
import { fetchData } from "../utils/apiUtils";
import { useLoaderContext } from "../contexts/LoaderContext";
import { getQueryParams } from "../utils/getQueryParams";

const apiKey = import.meta.env.VITE_API_KEY
const discoverURL = import.meta.env.VITE_API_DISCOVER

function useGenre(genreId) {
  const [movies, setMovies] = useState([])
  const { handleLoading } = useLoaderContext()

  const { page } = getQueryParams(false, true)
  
  useEffect(() => {
    const getMovies = async (url) => {
      handleLoading(true)
      const data = await fetchData(url)

      setMovies(data)
      handleLoading(false)
    }

    const movieGenreURL = `${discoverURL}movie?${apiKey}&with_genres=${genreId}&page=${page || 1}`
    getMovies(movieGenreURL)
  }, [apiKey, page])

  return movies 
}

export default useGenre