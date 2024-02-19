import { BiSearchAlt2 } from "react-icons/bi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaXmark } from 'react-icons/fa6'
import { useHeaderContext } from "../../../../contexts/HeaderContext"
import { useMediaQuery } from "react-responsive"
import handleSearch from "../../../../utils/handleSearch"

import styles from './SearchField.module.css'

export default function SearchField() {
  const { active, toggleMode } = useHeaderContext()
  const [click, setClick] = useState(false)
  const [search, setSearch] = useState("")

  const navigate = useNavigate()
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const handleSubmit = (ev) => handleSearch(ev, search, setSearch, navigate, isDesktop, active, toggleMode)

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`${styles.formHeader} ${click && styles.active}`}
    >
      <button type="submit" className={styles.searchIcon} onClick={() => setClick(true)}>
        <BiSearchAlt2 />
      </button>
      
      <div className={styles.inputSearch}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar filme"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </div>

      <div className={styles.closeIcon} onClick={() => setClick(false)}>
        <FaXmark />
      </div>      
    </form>
  )
}