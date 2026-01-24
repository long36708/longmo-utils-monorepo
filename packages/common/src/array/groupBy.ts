/**
 * 根据键函数对数组元素进行分组
 *
 * @param arr - 要分组的输入数组
 * @param keyFn - 返回每个元素的分组键的函数
 * @returns 对象，其中键是分组结果，值是元素数组
 * @example
 * ```ts
 * const data = [
 *   { name: 'Alice', role: 'admin' },
 *   { name: 'Bob', role: 'user' },
 *   { name: 'Charlie', role: 'admin' }
 * ]
 * groupBy(data, item => item.role)
 * // { admin: [{ name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' }],
 * //   user: [{ name: 'Bob', role: 'user' }] }
 * ```
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
