/**
 * 移除数组中的重复值
 *
 * @param arr - 输入数组
 * @returns 去除重复值后的新数组
 * @example
 * ```ts
 * unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * unique(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
 * ```
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}
