import { promises as fs } from 'fs'

/**
 * 检查文件或目录是否存在
 * @param filePath - 文件或目录路径
 * @returns 是否存在
 * @example
 * ```ts
 * const isExist = await exists('./config.json')
 * ```
 * @public
 */
export async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}
