const getFromLocalStorage = <T>(key: string): T => {
  const value = localStorage.getItem(key)

  if (value) return JSON.parse(value)

  throw new Error('Was not able to retrieve value')
}

export default getFromLocalStorage
