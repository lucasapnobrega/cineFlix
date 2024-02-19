import { useNavigate } from 'react-router-dom'
import styles from './ButtonBack.module.css'

export default function ButtonBack() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)} className={styles.button}>
      Voltar
    </button>
  )
}