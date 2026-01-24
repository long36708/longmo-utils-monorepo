/**
 * 获取内存使用信息
 * @returns 内存使用信息对象
 * @example
 * ```ts
 * const usage = getMemoryUsage()
 * console.log(usage)
 * // {
 * //   rss: 12345678,
 * //   heapTotal: 8765432,
 * //   heapUsed: 4321098,
 * //   external: 123456,
 * //   arrayBuffers: 12345
 * // }
 * ```
 * @public
 */
export function getMemoryUsage(): NodeJS.MemoryUsage {
  return process.memoryUsage()
}
