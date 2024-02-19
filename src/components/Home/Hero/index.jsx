import { Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleSearch from "../../../utils/handleSearch";

import styles from './Hero.module.css'

export default function Hero() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (ev) => handleSearch(ev, search, setSearch, navigate)

  return (    
    <Container>
      <div className={styles.heroContent} data-aos="flip-right" data-aos-duration='1250'>
        <h2>Descubra o Mundo do Cinema</h2>
        <p>Milhares de filmes e séries para explorar!</p>

        <form className={styles.formHero} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="search" 
            id="search"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            placeholder="Buscar filme"
          />

          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </Container>
  )
}