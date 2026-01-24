import { promises as fs } from 'fs'

/**
 * 确保目录存在，如果不存在则创建
 * @param dirPath - 目录路径
 * @example
 * ```ts
 * await ensureDir('./dist')
 * ```
 * @public
 */
export async function ensureDir(dirPath: string): Promise<void> {
  try {
    await fs.access(dirPath)
  } catch {
    await fs.mkdir(dirPath, { recursive: true })
  }
}
