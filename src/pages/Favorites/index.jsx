import { Container } from "react-bootstrap";
import { useFavoritesContext } from "../../contexts/FavoritesContext";
import NotFound from "../../components/NotFound";

import styles from './Favorites.module.css'

import FavoriteCard from "../../components/Card/FavoriteCard";

export default function Favorites() {
  const { favorites } = useFavoritesContext()

  return (
    <main>
      <Container>
        {favorites.length > 0 && <h2 className="myListTitle" >Minha Lista</h2>}
        
        <div className={styles.moviesFavorite}>
          {favorites.length > 0 ? favorites.map(movieFav => (
            <FavoriteCard key={movieFav.id} movie={movieFav} />
          )) : (
            <NotFound 
              title="Oops... Não encontramos nenhum filme na sua lista de favoritos!" 
              description="Para adicionar basta clicar no ícone de coração presente nos cards dos filmes! =)" 
              haveDescription={true}
            />
          )}
        </div>
      </Container>
    </main>
  )
}