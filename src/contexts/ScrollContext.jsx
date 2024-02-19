import { createContext, useContext, useState } from "react";

const ScrollContext = createContext()

export function ScrollContextProvider({ children }) {
  const [scrollToGenres, setScrollToGenres] = useState(false)

  return (
    <ScrollContext.Provider value={{ scrollToGenres, setScrollToGenres }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if(!context) {
    throw new Error("useScrollContext should be used whitin a ScrollContextProvider")
  }

  return context
}