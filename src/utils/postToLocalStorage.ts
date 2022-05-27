const postToLocalStorage = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value))

export default postToLocalStorage
