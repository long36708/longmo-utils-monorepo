/**
 * 节流函数，限制函数执行频率
 * @param fn - 要执行的函数
 * @param delay - 节流时间间隔（毫秒）
 * @returns 节流后的函数
 * @example
 * ```ts
 * const throttledFn = throttle(() => console.log('hello'), 300)
 * throttledFn() // 立即执行
 * throttledFn() // 300ms 内不执行
 * ```
 * @public
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now()

    if (now - lastCall >= delay) {
      lastCall = now
      fn.apply(this, args)
    } else if (timeoutId === null) {
      timeoutId = setTimeout(() => {
        lastCall = Date.now()
        timeoutId = null
        fn.apply(this, args)
      }, delay - (now - lastCall))
    }
  }
}
