import { BiMoviePlay } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import { useHeaderContext } from "../../../contexts/HeaderContext";
import { useScrollContext } from "../../../contexts/ScrollContext";
import SearchField from "./SearchField";

import styles from './Header.module.css'

export default function Header({ isHome = true }) {
  const { active, icon, toggleMode } = useHeaderContext()
  const { pathname } = useLocation()
  const { setScrollToGenres } = useScrollContext()
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const handleClick = () => {
    toggleMode()
    setScrollToGenres(true)
  }

  return (
    <header className={`${styles.header} ${!isHome && styles.backgroundColor} ${active && styles.headerOpen}`}>
      <Container className={styles.container}>
        <h2>
          <Link to="/" onClick={toggleMode}>
            {isDesktop && <BiMoviePlay />} CineFlix 
          </Link>
        </h2>
      
        <nav className={`${styles.navbar} ${active && styles.menuOpen} ${isHome && styles.homeHover}`}>
          <Link to="/" onClick={toggleMode} className={`${pathname === "/" && `${styles.tabActive}`}`}>Início</Link>
          <Link onClick={handleClick}>Gêneros</Link>          
          <Link to="/topRated" onClick={toggleMode} className={`${pathname === "/topRated" && `${styles.tabActive}`}`}>Melhores Filmes</Link>
          <Link to="/favorites" onClick={toggleMode} className={`${pathname === "/favorites" && `${styles.tabActive}`}`}>Favoritos</Link>
        </nav>
        
        <div onClick={toggleMode} className={styles.menuHamb}>
          {icon}
        </div>
        
        <SearchField />
      </Container>
    </header> 
  )
}