import { useSearchParams } from "react-router-dom"

export const getQueryParams = (hasQuery, hasPage) => {
  const [searchParams] = useSearchParams()
  let query, page

  if(hasQuery) query = searchParams.get("q")
  if(hasPage) page = searchParams.get("page")

  return { query, page }
}