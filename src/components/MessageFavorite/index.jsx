import { useRef, useState } from 'react';
import styles from './MessageFavorite.module.css'
import { useEffect } from 'react';

export default function MessageFavorite({ message, movieTitle }) {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    if(timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timerRef.current)
  }, [message])

  return (
     <>
      {isVisible && (
        <div className={`${styles.containerMessage} ${styles.show} ${message === "adicionado" ? styles.bgGreen : styles.bgRed}`}>
          {message === "adicionado" ? <p><span className='bold'>"{movieTitle}"</span>{message} aos favoritos!</p> : <p><span className='bold'>{movieTitle}</span> {message} dos favoritos!</p>}
        </div>
      )}
    </>
  )
}