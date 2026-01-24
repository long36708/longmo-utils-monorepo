import { getEnvMode } from './getEnvMode'

/**
 * 检查当前环境是否为生产环境
 * @returns 是否为生产环境
 * @example
 * ```ts
 * if (isProduction()) {
 *   console.log('Running in production mode')
 * }
 * ```
 * @public
 */
export function isProduction(): boolean {
  return getEnvMode() === 'production'
}
