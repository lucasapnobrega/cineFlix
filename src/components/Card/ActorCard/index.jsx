import { Link } from 'react-router-dom'
import defaultImage from '../../../assets/default-image-user.jpg'

import styles from './ActorCard.module.css'

const imgURL = import.meta.env.VITE_IMG

export default function ActorCard({ actor }) {
  return (
    <Link to={`/actor/${actor.id}`} title={`Biografia - ${actor.name}`}>
      <div className={styles.actorCard} data-aos='flip-up' data-aos-duration='1000'>
        <div className={styles.castImg}>
          <img
            src={`${actor.profile_path ? `${imgURL}${actor.profile_path}` : `${defaultImage}`}`}
            alt={actor.name}
            className={!actor.profile_path ? styles.defaultImageStyle : ""}
          />
        </div>
      
        <div className={styles.castInfo}>
          <h4>{actor.name}</h4>
          <p>{actor.character.split("/")[0]}</p>
        </div>
      </div>
    </Link>
  )
}