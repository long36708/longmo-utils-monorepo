import { dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * 获取当前模块的目录名
 * @param url - 模块的 URL
 * @returns 目录名
 * @example
 * ```ts
 * const __dirname = getDirname(import.meta.url)
 * ```
 * @public
 */
export function getDirname(url: string): string {
  return dirname(fileURLToPath(url))
}
