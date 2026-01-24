/**
 * 将数组拆分成指定大小的子数组
 *
 * @param arr - 要拆分的输入数组
 * @param size - 每个子数组的大小。如果小于等于 0，则默认为 1
 * @returns 子数组的数组
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
 * chunk([1, 2, 3], 5) // [[1, 2, 3]]
 * chunk([1, 2, 3], 0) // [[1], [2], [3]] (size 默认为 1)
 * chunk([1, 2, 3], -2) // [[1], [2], [3]] (size 默认为 1)
 * ```
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0){
    size = 1
  }
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
