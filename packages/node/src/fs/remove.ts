import { promises as fs } from 'fs'
import { join } from 'path'

/**
 * 递归删除文件或目录
 * @param filePath - 文件或目录路径
 * @example
 * ```ts
 * await remove('./temp')
 * ```
 * @public
 */
export async function remove(filePath: string): Promise<void> {
  try {
    const stat = await fs.stat(filePath)
    if (stat.isDirectory()) {
      const files = await fs.readdir(filePath)
      await Promise.all(
        files.map(async (file) => {
          const fullPath = join(filePath, file)
          await remove(fullPath)
        })
      )
      await fs.rmdir(filePath)
    } else {
      await fs.unlink(filePath)
    }
  } catch {
    // File doesn't exist, ignore
  }
}
