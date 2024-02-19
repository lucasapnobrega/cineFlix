import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { scrollToTop } from "../../../utils/scrollToTopBottom";
import { useEffect, useState } from "react";

import styles from './ArrowToTop.module.css'

export default function ArrowToTop() {
  const [arrowVisible, setArrowVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    
    return () => window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if(window.scrollY > 100) setArrowVisible(true)
    else setArrowVisible(false) 
  }

  return (
    <>
      {arrowVisible && (
        <span className={styles.arrowToTop} onClick={scrollToTop} title="Ir para o topo da página">
          <FaRegArrowAltCircleUp />
        </span>
      )}
    </>
  )
}