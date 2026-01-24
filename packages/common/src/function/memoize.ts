/**
 * 创建函数的记忆化版本，缓存函数结果
 * @param fn - 要记忆化的函数
 * @param keyFn - 可选的缓存键生成函数
 * @returns 记忆化后的函数
 * @example
 * ```ts
 * const memoizedFn = memoize((a: number) => a * 2)
 * memoizedFn(2) // 4，计算并缓存
 * memoizedFn(2) // 4，从缓存返回
 * ```
 * @public
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  keyFn?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>) => {
    const key = keyFn ? keyFn(...args) : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  }) as T
}
