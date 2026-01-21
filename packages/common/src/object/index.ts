/**
 * Object utilities
 */

/**
 * Deeply merges multiple objects
 */
export function deepMerge<T extends Record<string, any>>(...objects: Partial<T>[]): T {
  const result = {} as any

  for (const obj of objects) {
    for (const key in obj) {
      if (obj[key] !== undefined) {
        if (
          typeof obj[key] === 'object' &&
          obj[key] !== null &&
          !Array.isArray(obj[key]) &&
          typeof result[key] === 'object' &&
          result[key] !== null
        ) {
          result[key] = deepMerge(result[key], obj[key])
        } else {
          result[key] = obj[key]
        }
      }
    }
  }

  return result
}

/**
 * Creates a deep clone of an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as unknown as T
  }

  const cloned = {} as T
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key])
    }
  }

  return cloned
}

/**
 * Checks if two objects are deeply equal
 */
export function deepEqual(a: any, b: any): boolean {
  if (a === b) return true

  if (typeof a !== typeof b) return false

  if (typeof a !== 'object' || a === null || b === null) return false

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) return false

  for (const key of keysA) {
    if (!keysB.includes(key)) return false
    if (!deepEqual(a[key], b[key])) return false
  }

  return true
}

/**
 * Gets a nested value from an object using a path string
 */
export function get(obj: any, path: string, defaultValue?: any): any {
  const keys = path.split('.')
  let result = obj

  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue
    }
    result = result[key]
  }

  return result !== undefined ? result : defaultValue
}

/**
 * Sets a nested value in an object using a path string
 */
export function set(obj: any, path: string, value: any): void {
  const keys = path.split('.')
  const lastKey = keys.pop()!
  let current = obj

  for (const key of keys) {
    if (current[key] === undefined) {
      current[key] = {}
    }
    current = current[key]
  }

  current[lastKey] = value
}
