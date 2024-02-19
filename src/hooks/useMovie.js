import { useEffect, useState } from "react";
import { fetchData } from "../utils/apiUtils";
import { useLoaderContext } from "../contexts/LoaderContext";

const moviesURL = import.meta.env.VITE_API 
const apiKey = import.meta.env.VITE_API_KEY

function useMovie(id) {
  const [movie, setMovie] = useState(null)
  const { handleLoading } = useLoaderContext()

  useEffect(() => {
    const getMovie = async(url) => {
      handleLoading(true)
      const data = await fetchData(url)
    
      setMovie(data)
      handleLoading(false)
    }

    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [moviesURL, apiKey])

  return movie
}

export default useMovie