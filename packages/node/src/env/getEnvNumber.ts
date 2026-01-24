/**
 * 获取数字类型的环境变量
 * @param key - 环境变量键
 * @param defaultValue - 默认值（默认: 0）
 * @returns 数字值
 * @example
 * ```ts
 * const port = getEnvNumber('PORT', 3000)
 * ```
 * @public
 */
export function getEnvNumber(key: string, defaultValue: number = 0): number {
  const value = process.env[key]
  const parsed = value ? parseInt(value, 10) : NaN
  return isNaN(parsed) ? defaultValue : parsed
}
