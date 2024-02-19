function time(minutes) {
  const hour = Math.floor(minutes / 60)
  
  if(hour === 0) return `${minutes} minutos`
  
  const min = minutes % 60

  let formattedMinutes
  if(min > 0) {
    formattedMinutes = `${min > 10 ? `${min}` : `0${min}`}min`
  } else {
    formattedMinutes = 0
  }
  
  return `${hour}h ${formattedMinutes}`
}

export default time