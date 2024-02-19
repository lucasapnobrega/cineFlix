import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";

import styles from '../../css/sharedStyles/notFound/notFound.module.css'

export default function NotFound({ title, description, haveDescription = false }) {
  return (
    <div className={styles.containerNotFound}>
      <h3 className={styles.messageNotFound}>{title}</h3>

      {haveDescription && <p>{description}</p>}

      <Link to="/">
        <FaArrowLeft /> Voltar
      </Link>
    </div>
  )
}