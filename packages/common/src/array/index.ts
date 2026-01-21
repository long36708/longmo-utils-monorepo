/**
 * Array utilities
 */

/**
 * Removes duplicate values from an array
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

/**
 * Groups array elements by a key function
 */
export function groupBy<T, K extends string | number>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    const key = keyFn(item)
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {} as Record<K, T[]>)
}

/**
 * Chunks an array into smaller arrays of specified size
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

/**
 * Shuffles an array randomly
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * Creates an array of numbers from start to end
 */
export function range(start: number, end?: number, step: number = 1): number[] {
  if (end === undefined) {
    return Array.from({ length: start }, (_, i) => i)
  }
  const result: number[] = []
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i)
  }
  return result
}
