/**
 * 深度克隆一个对象
 * @param obj - 要克隆的对象
 * @returns 克隆后的对象
 * @example
 * ```ts
 * const obj = {a: 1, b: {c: 2}}
 * const cloned = deepClone(obj)
 * cloned.b.c = 3
 * console.log(obj.b.c) // 2
 * ```
 * @public
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
