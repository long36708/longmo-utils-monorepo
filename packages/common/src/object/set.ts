/**
 * 通过路径字符串设置对象的嵌套值
 * @param obj - 对象
 * @param path - 路径字符串，使用点分隔
 * @param value - 要设置的值
 * @example
 * ```ts
 * const obj = {a: {}}
 * set(obj, 'a.b.c', 1)
 * console.log(obj) // {a: {b: {c: 1}}}
 * ```
 * @public
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
