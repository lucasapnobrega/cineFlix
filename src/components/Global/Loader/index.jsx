import { useLoaderContext } from "../../../contexts/LoaderContext"
import { BeatLoader } from "react-spinners"

export default function Loader() {
  const { loading } = useLoaderContext()

  return (
    <>
      {loading && (
        <BeatLoader size={25} aria-label="Loading Spinner" data-testid="loader" className="spinner"/>
      )}
    </>
  )
}