/**
 * Network utilities using fetch API
 */

/**
 * Performs an HTTP GET request
 */
export async function get<T = any>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    method: 'GET',
    ...options
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

/**
 * Performs an HTTP POST request
 */
export async function post<T = any>(
  url: string,
  data?: any,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    body: JSON.stringify(data),
    ...options
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

/**
 * Performs an HTTP PUT request
 */
export async function put<T = any>(
  url: string,
  data?: any,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    body: JSON.stringify(data),
    ...options
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

/**
 * Performs an HTTP DELETE request
 */
export async function del<T = any>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    method: 'DELETE',
    ...options
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

/**
 * Checks if the browser is online
 */
export function isOnline(): boolean {
  return navigator.onLine
}

/**
 * Gets the current user's language
 */
export function getUserLanguage(): string {
  return navigator.language
}

/**
 * Copies text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy text:', error)
    return false
  }
}

/**
 * Reads text from clipboard
 */
export async function readFromClipboard(): Promise<string> {
  try {
    return await navigator.clipboard.readText()
  } catch (error) {
    console.error('Failed to read text:', error)
    throw error
  }
}
