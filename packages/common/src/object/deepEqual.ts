/**
 * 深度比较两个对象是否相等
 * @param a - 第一个对象
 * @param b - 第二个对象
 * @returns 是否相等
 * @example
 * ```ts
 * deepEqual({a: 1}, {a: 1}) // true
 * deepEqual({a: {b: 1}}, {a: {b: 1}}) // true
 * deepEqual({a: 1}, {a: 2}) // false
 * ```
 * @public
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
