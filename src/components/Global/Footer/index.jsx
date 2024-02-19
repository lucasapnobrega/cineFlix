import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap";
import { scrollToTop } from "../../../utils/scrollToTopBottom";

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} >
      <Container className={styles.container}>
        <Link to="/" onClick={() => scrollToTop()}>
          <h3><BiMoviePlay /> CineMovie</h3>
        </Link>
        
        <p>Lucas Alcântara &copy;</p>

        <nav className={styles.social}>
          <a href="https://github.com/lucasapnobrega" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/lucas-alc%C3%A2ntara-b46245278/" target="_blank"><FaLinkedin /></a>
        </nav>
      </Container>
    </footer>
  )
}