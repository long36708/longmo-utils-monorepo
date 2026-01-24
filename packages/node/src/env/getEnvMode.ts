/**
 * 获取当前环境模式（development、production、test）
 * @returns 环境模式
 * @example
 * ```ts
 * const mode = getEnvMode()
 * console.log(mode) // 'development' | 'production' | 'test'
 * ```
 * @public
 */
export function getEnvMode(): string {
  return process.env.NODE_ENV || 'development'
}
