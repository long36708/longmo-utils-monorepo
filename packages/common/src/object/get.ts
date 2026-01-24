/**
 * 通过路径字符串获取对象的嵌套值
 * @param obj - 对象
 * @param path - 路径字符串，使用点分隔
 * @param defaultValue - 默认值
 * @returns 获取的值
 * @example
 * ```ts
 * const obj = {a: {b: {c: 1}}}
 * get(obj, 'a.b.c') // 1
 * get(obj, 'a.b.d', 'default') // 'default'
 * ```
 * @public
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
