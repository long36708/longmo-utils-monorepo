import { promises as fs } from 'fs'
import { join } from 'path'

/**
 * 递归获取目录下的所有文件
 * @param dirPath - 目录路径
 * @param extensions - 可选的文件扩展名过滤器
 * @returns 文件路径数组
 * @example
 * ```ts
 * const allFiles = await getFiles('./src')
 * const tsFiles = await getFiles('./src', ['.ts', '.tsx'])
 * ```
 * @public
 */
export async function getFiles(
  dirPath: string,
  extensions?: string[]
): Promise<string[]> {
  const files: string[] = []

  async function traverse(currentPath: string) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = join(currentPath, entry.name)

      if (entry.isDirectory()) {
        await traverse(fullPath)
      } else if (entry.isFile()) {
        if (!extensions || extensions.some((ext) => entry.name.endsWith(ext))) {
          files.push(fullPath)
        }
      }
    }
  }

  await traverse(dirPath)
  return files
}
