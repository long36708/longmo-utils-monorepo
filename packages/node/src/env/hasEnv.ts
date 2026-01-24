/**
 * 检查环境变量是否已设置
 * @param key - 环境变量键
 * @returns 是否已设置
 * @example
 * ```ts
 * if (hasEnv('API_KEY')) {
 *   console.log('API_KEY is set')
 * }
 * ```
 * @public
 */
export function hasEnv(key: string): boolean {
  return typeof process.env[key] !== 'undefined'
}
