/**
 * 防抖函数，延迟执行函数
 * @param fn - 要执行的函数
 * @param delay - 延迟时间（毫秒）
 * @returns 防抖后的函数
 * @example
 * ```ts
 * const debouncedFn = debounce(() => console.log('hello'), 300)
 * debouncedFn() // 300ms 后执行
 * debouncedFn() // 重置计时器，300ms 后执行
 * ```
 * @public
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
