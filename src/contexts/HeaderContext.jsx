import { createContext, useContext, useState } from 'react'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
import { useMediaQuery } from 'react-responsive'

export const HeaderContext = createContext({
  icon: <FaBarsStaggered />
})

export function HeaderContextProvider({ children }) {
  const [active, setActive] = useState(false)
  const [icon, setIcon] = useState(<FaBarsStaggered />)
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const toggleMode = () => {
    if(!isDesktop) {
      setActive((prevActive) => !prevActive)
      setIcon((prevIcon) => prevIcon.type === FaBarsStaggered ? <FaXmark /> : <FaBarsStaggered />)
    }
  }

  return (
    <HeaderContext.Provider value={{ active, icon, toggleMode }}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeaderContext() {
  const context = useContext(HeaderContext)
  if(!context) {
    throw new Error("useHeaderContext should be used whitin a HeaderContextProvider")
  }

  return context
}