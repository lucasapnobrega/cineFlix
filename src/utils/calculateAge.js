function calculateAge(birthday, deathday) {
  let today, death, birthDate, ageDiff

  if(deathday) {
    death = new Date(deathday)
    birthDate = new Date(birthday)

    ageDiff = death - birthDate
  } else {
    today = new Date()
    birthDate = new Date(birthday)

    ageDiff = today - birthDate
  }

  const ageDate = new Date(ageDiff)
  const age = ageDate.getUTCFullYear() - 1970

  return age
}

export default calculateAge