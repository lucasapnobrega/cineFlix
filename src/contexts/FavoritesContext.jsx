import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const favoritesMovie = JSON.parse(localStorage.getItem('cineFlix-fav'))

    return favoritesMovie || []
  })

  const handleFavoritesMovies = (movie) => {
    const storedFavorites = JSON.parse(localStorage.getItem('cineFlix-fav')) || []

    const findSameMovie = storedFavorites.find(favMovie => favMovie.id === movie.id)

    if(findSameMovie) {
      const newFavorites = storedFavorites.filter(favMovie => favMovie.id !== findSameMovie.id)

      localStorage.setItem('cineFlix-fav', JSON.stringify(newFavorites))
      setFavorites(newFavorites)

      return
    }

    const newFavorites = [movie, ...storedFavorites]

    localStorage.setItem('cineFlix-fav', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  const handleFavoriteMessage = (movie, haveFavorite, setShowMessage) => {
    handleFavoritesMovies(movie)
    
    const isFavorite = !haveFavorite
    setShowMessage(isFavorite ? 'adicionado' : 'removido')
  }

  return (
    <FavoritesContext.Provider value={{ favorites, handleFavoritesMovies, handleFavoriteMessage}}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext)
  if(!context) {
    throw new Error("useFavoritesContext should be used whitin a FavoritesContextProvider")
  }

  return context
}