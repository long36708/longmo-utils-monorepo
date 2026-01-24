/**
 * 深度合并多个对象
 * @param objects - 要合并的对象数组
 * @returns 合并后的对象
 * @example
 * ```ts
 * deepMerge({a: 1}, {b: 2}) // {a: 1, b: 2}
 * deepMerge({a: {x: 1}}, {a: {y: 2}}) // {a: {x: 1, y: 2}}
 * ```
 * @public
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
