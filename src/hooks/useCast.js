import { useEffect, useState } from "react";
import { useLoaderContext } from "../contexts/LoaderContext";
import { fetchData } from "../utils/apiUtils";

const moviesURL = import.meta.env.VITE_API 
const apiKey = import.meta.env.VITE_API_KEY

function useCast(movieId) {
  const [cast, setCast] = useState([])
  const { handleLoading } = useLoaderContext()

  useEffect(() => {
    const getTopRatedMovies = async(url) => {
      handleLoading(true)
      const data = await fetchData(url)

      setCast(data.cast.slice(0, 10))
      handleLoading(false)
    }

    const actorsURL = `${moviesURL}${movieId}/credits?${apiKey}`
    getTopRatedMovies(actorsURL)
  }, [movieId])

  return cast
}

export default useCast
