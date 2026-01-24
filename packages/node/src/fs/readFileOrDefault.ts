import { exists } from './exists'
import { readJson } from './readJson'

/**
 * 如果文件存在则读取，否则返回默认值
 * @param filePath - 文件路径
 * @param defaultValue - 默认值
 * @returns 文件内容或默认值
 * @example
 * ```ts
 * const config = await readFileOrDefault('./config.json', { theme: 'light' })
 * ```
 * @public
 */
export async function readFileOrDefault<T>(
  filePath: string,
  defaultValue: T
): Promise<T> {
  const isExist = await exists(filePath)
  if (!isExist) {
    return defaultValue
  }
  return readJson<T>(filePath)
}
