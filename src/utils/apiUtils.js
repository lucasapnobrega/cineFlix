const fetchData = async(url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
   
    return data
  } catch(error) {
    console.error(`Erro: ${error}`)
    return null
  }
}

const formatCurrency = (number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })
}

export { fetchData, formatCurrency }