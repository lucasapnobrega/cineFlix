function handleSearch(ev, search, setSearch, navigate, isDesktop, active, toggleMode) {
  ev.preventDefault()
  if(!search) return

  navigate(`/search?q=${search}&page=1`)
  setSearch("")

  if(!isDesktop && active) toggleMode()
}

export default handleSearch