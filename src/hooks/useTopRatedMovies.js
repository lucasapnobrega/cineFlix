import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../utils/apiUtils";
import { useLoaderContext } from "../contexts/LoaderContext";

const moviesURL = import.meta.env.VITE_API 
const apiKey = import.meta.env.VITE_API_KEY

function useTopRatedMovies() {
  const [topMovies, setTopMovies] = useState([])
  const { handleLoading } = useLoaderContext()

  useEffect(() => {
    const getTopRatedMovies = async(url) => {
      handleLoading(true)
      const data = await fetchData(url)

      setTopMovies(data.results)
      handleLoading(false)
    }

    const topRatedURL = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedURL)
  }, [moviesURL, apiKey])

  return topMovies
}

export default useTopRatedMovies