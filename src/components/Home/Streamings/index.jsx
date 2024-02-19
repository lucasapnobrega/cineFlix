import { IoIosArrowDown } from "react-icons/io";
import netflixLogo from '../../../assets/logos/netflix-logo.svg'
import HBOLogo from '../../../assets/logos/HBO-logo.svg'
import amazonPrimeLogo from '../../../assets/logos/amazonPrime-logo.png'
import disneyLogo from '../../../assets/logos/disney-logo.svg'

import styles from './Streamings.module.css'
import { useRef } from "react";

export default function Streamings() {
  const linkRef = useRef(null)

  const handleClick = () => linkRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className={styles.streaming}>
      <span className={styles.arrowBottom} onClick={handleClick} title="Mover para baixo">
        <IoIosArrowDown />
      </span>

      <h3 ref={linkRef}>Streamings</h3>

      <div className={styles.streamingLogos}>
        <a href="https://www.netflix.com" target='_blank' title='Ir para Netflix'data-aos='flip-right' data-aos-duration='1500'  >
          <img src={netflixLogo} alt="Logo da Netflix" className={styles.netflixLogo} />
        </a>
        <a href="https://www.hbomax.com" target='_blank' title='Ir para HBO' data-aos='flip-up' data-aos-duration='1500'>
          <img src={HBOLogo} alt="Logo da HBO" className={styles.HBOLogo} />
        </a>
        <a href="https://primevideo.com" target='_blank' title='Ir para Amazon Prime Video' data-aos='flip-down' data-aos-duration='1500'>
          <img src={amazonPrimeLogo} alt="Logo do Amazon Prime Video" className={styles.amazonLogo} />
        </a>
        <a href="https://disneyplus.com" target='_blank' title='Ir para Disney Plus' data-aos='flip-left' data-aos-duration='1500'>
          <img src={disneyLogo} alt="Logo da Disney Plus" />
        </a>
      </div>
    </div>
  )
}