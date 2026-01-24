/**
 * 获取布尔类型的环境变量
 * @param key - 环境变量键
 * @param defaultValue - 默认值（默认: false）
 * @returns 布尔值
 * @example
 * ```ts
 * const enabled = getEnvBool('DEBUG', false)
 * // DEBUG=true 或 DEBUG=1 返回 true
 * // DEBUG=false 或 DEBUG=0 返回 false
 * ```
 * @public
 */
export function getEnvBool(key: string, defaultValue: boolean = false): boolean {
  const value = process.env[key]?.toLowerCase()
  if (value === 'true' || value === '1') return true
  if (value === 'false' || value === '0') return false
  return defaultValue
}
