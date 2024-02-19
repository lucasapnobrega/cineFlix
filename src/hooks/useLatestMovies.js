import { useEffect } from "react"
import { useState } from "react"
import { useLoaderContext } from "../contexts/LoaderContext";
import { getQueryParams } from "../utils/getQueryParams";
import { fetchData } from "../utils/apiUtils";

const discoverURL = import.meta.env.VITE_API_DISCOVER

function useLatestMovies(apiKey) {
  const [movies, setMovies] = useState([])
  const { handleLoading } = useLoaderContext()

  const { page } = getQueryParams(false, true)
  
  useEffect(() => {
    const getMovies = async (url) => {
      handleLoading(true)
      const data = await fetchData(url)

      setMovies(data.results.slice(0, 12))
      handleLoading(false)
    }

    const today = new Date().toISOString().split('T')[0]
    const minVoteCount = 200
    const latestMoviesURL = `${discoverURL}movie?sort_by=release_date.desc&${apiKey}&release_date.lte=${today}&vote_count.gte=${minVoteCount}`
    getMovies(latestMoviesURL)
  }, [apiKey, page])

  return movies 
}

export default useLatestMovies