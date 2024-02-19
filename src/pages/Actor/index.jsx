import { Link, useParams } from "react-router-dom"
import { FaPeopleGroup } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";
import useActor from "../../hooks/useActor"
import getYear from "../../utils/getYear";
import ButtonBack from "../../components/ButtonBack";
import calculateAge from "../../utils/calculateAge";

import styles from './Actor.module.css'

const imageURL = import.meta.env.VITE_IMG

export default function Actor() {
  const { id } = useParams()
  const actor = useActor(id)
  const isDesktop = useMediaQuery({minWidth: 1024})
  let age

  if(actor) {
    actor.movie_credits.cast.sort((a, b) => b.popularity - a.popularity)
    age = calculateAge(actor.birthday, actor.deathday)
  }
  
  return (
    <main>
      <Container>
        {actor && (
          <div className={styles.cardActor}>
            {!isDesktop && <h1 className={styles.actorName}>{actor.name}</h1>}
      
            <div className={styles.wrapperInitial}>
              <img src={`${actor.profile_path && `${imageURL}${actor.profile_path}`}`} alt={actor.name} className={styles.imageActor}/>
              
              <div className={styles.actorMainInfo}>
                {isDesktop && <h1 className={styles.actorName}>{actor.name}</h1>}
                <p title="Popularidade" className={styles.popularity}><FaPeopleGroup /> {actor.popularity.toFixed(2)}</p>
                {actor.biography && (
                  <>
                    <h3>Biografia:</h3>
                    <p className={styles.bio}>{actor.biography}</p>
                  </>
                )}
              </div>
            </div>

            <div className={styles.actorExtraInfo}>
              <h3>Informações adicionais:</h3>
              <p><span className="bold">Nascimento:</span> {actor.birthday} {!actor.deathday && `(${age} anos)`}</p>
              {actor.deathday && (
                <p><span className="bold">Data da Morte:</span> {actor.deathday} ({age} anos)</p>
              )}
              <p><span className="bold">Local de Nascimento:</span> {actor.place_of_birth}</p>
              <p><span className="bold">Gênero:</span> {actor.gender === 2 ? "Masculino" : "Feminino"}</p>
            </div>

            <div className={styles.cardsActorMovies}>
              <h3>Principais Filmes:</h3>
              <div>
                {actor.movie_credits.cast.slice(0, 15).map(movie => (
                  <Link to={`/movie/${movie.id}`} key={movie.id} className={styles.cardActorMovie} title={`Informações de ${movie.title}`}>
                    <img src={`${imageURL}${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.title} - <span className="bold">{getYear(movie.release_date)}</span></p>
                  </Link>
                ))}
              </div>
            </div>

            <ButtonBack />
          </div>
        )}
      </Container>
    </main>
  )
}  