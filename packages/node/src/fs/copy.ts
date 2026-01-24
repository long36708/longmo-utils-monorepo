import { promises as fs } from 'fs'
import { join, dirname } from 'path'
import { ensureDir } from './ensureDir'

/**
 * 递归复制文件或目录
 * @param src - 源路径
 * @param dest - 目标路径
 * @example
 * ```ts
 * await copy('./src', './dist')
 * ```
 * @public
 */
export async function copy(src: string, dest: string): Promise<void> {
  const stat = await fs.stat(src)

  if (stat.isDirectory()) {
    await ensureDir(dest)
    const files = await fs.readdir(src)
    await Promise.all(
      files.map(async (file) => {
        const srcPath = join(src, file)
        const destPath = join(dest, file)
        await copy(srcPath, destPath)
      })
    )
  } else {
    await fs.mkdir(dirname(dest), { recursive: true })
    await fs.copyFile(src, dest)
  }
}
