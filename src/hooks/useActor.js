import { useEffect, useState } from "react"
import { fetchData } from "../utils/apiUtils"
import { useLoaderContext } from "../contexts/LoaderContext"

const apiKey = import.meta.env.VITE_API_KEY
const apiPerson = import.meta.env.VITE_API_PERSON

function useActor(actorId) {
  const [actor, setActor] = useState()
  const { handleLoading } = useLoaderContext()

  useEffect(() => {
    const getActorData = async(url) => {
      handleLoading(true)
      const data = await fetchData(url)

      setActor(data)
      handleLoading(false)
    }

    const actorURL = `${apiPerson}${actorId}?${apiKey}&language=pt-BR&append_to_response=movie_credits`
    getActorData(actorURL)
  }, [actorId, apiKey])

  return actor
}

export default useActor