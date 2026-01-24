/**
 * 获取环境变量
 * @param key - 环境变量键
 * @param defaultValue - 默认值
 * @returns 环境变量值
 * @example
 * ```ts
 * const value = getEnv('API_URL', 'http://localhost:3000')
 * ```
 * @public
 */
export function getEnv(key: string, defaultValue?: string): string {
  return process.env[key] || defaultValue || ''
}
