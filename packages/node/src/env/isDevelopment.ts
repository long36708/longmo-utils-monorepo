import { getEnvMode } from './getEnvMode'

/**
 * 检查当前环境是否为开发环境
 * @returns 是否为开发环境
 * @example
 * ```ts
 * if (isDevelopment()) {
 *   console.log('Running in development mode')
 * }
 * ```
 * @public
 */
export function isDevelopment(): boolean {
  return getEnvMode() === 'development'
}
