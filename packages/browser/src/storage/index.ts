/**
 * Storage utilities using localStorage and sessionStorage
 */

/**
 * Gets an item from localStorage
 */
export function getLocalStorage<T = any>(key: string): T | null {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`)
    return null
  }
}

/**
 * Sets an item in localStorage
 */
export function setLocalStorage<T>(key: string, value: T): boolean {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error writing to localStorage: ${error}`)
    return false
  }
}

/**
 * Removes an item from localStorage
 */
export function removeLocalStorage(key: string): boolean {
  try {
    window.localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`)
    return false
  }
}

/**
 * Clears all items from localStorage
 */
export function clearLocalStorage(): boolean {
  try {
    window.localStorage.clear()
    return true
  } catch (error) {
    console.error(`Error clearing localStorage: ${error}`)
    return false
  }
}

/**
 * Gets an item from sessionStorage
 */
export function getSessionStorage<T = any>(key: string): T | null {
  try {
    const item = window.sessionStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Error reading from sessionStorage: ${error}`)
    return null
  }
}

/**
 * Sets an item in sessionStorage
 */
export function setSessionStorage<T>(key: string, value: T): boolean {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error writing to sessionStorage: ${error}`)
    return false
  }
}

/**
 * Removes an item from sessionStorage
 */
export function removeSessionStorage(key: string): boolean {
  try {
    window.sessionStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Error removing from sessionStorage: ${error}`)
    return false
  }
}
