import { promises as fs } from 'fs'

/**
 * 读取 JSON 文件
 * @param filePath - 文件路径
 * @returns 解析后的 JSON 数据
 * @example
 * ```ts
 * const data = await readJson('./config.json')
 * ```
 * @public
 */
export async function readJson<T = any>(filePath: string): Promise<T> {
  const content = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(content)
}
