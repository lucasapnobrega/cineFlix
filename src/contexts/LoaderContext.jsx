import { createContext, useContext, useState } from "react";

export const LoaderContext = createContext({})

export function LoaderContextProvider({ children }) {
  const [loading, setLoading] = useState(false)

  const handleLoading = (bool) => {
    setLoading(bool)
  }

  return (
    <LoaderContext.Provider value={{ loading, handleLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export function useLoaderContext() {
  const context = useContext(LoaderContext)
  if(!context) {
    throw new Error("useLoaderContext should be used whitin a LoaderContextProvider")
  }

  return context
}