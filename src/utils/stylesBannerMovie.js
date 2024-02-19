function stylesBannerMovie(movie) {
  if(!movie.backdrop_path) return null

  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '82vh'
  }

  return styles
}

export default stylesBannerMovie