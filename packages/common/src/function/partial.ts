/**
 * 创建偏函数，预设部分参数
 * @param fn - 原始函数
 * @param presetArgs - 预设的参数
 * @returns 偏函数
 * @example
 * ```ts
 * const add = (a: number, b: number) => a + b
 * const add5 = partial(add, 5)
 * add5(3) // 8
 * ```
 * @public
 */
export function partial<T extends (...args: any[]) => any>(
  fn: T,
  ...presetArgs: any[]
): (...remainingArgs: any[]) => ReturnType<T> {
  return function (...remainingArgs: any[]) {
    return fn(...presetArgs, ...remainingArgs)
  }
}
