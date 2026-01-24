import { promises as fs } from 'fs'

/**
 * 将数据写入 JSON 文件
 * @param filePath - 文件路径
 * @param data - 要写入的数据
 * @example
 * ```ts
 * await writeJson('./config.json', { name: 'test' })
 * ```
 * @public
 */
export async function writeJson(filePath: string, data: any): Promise<void> {
  const content = JSON.stringify(data, null, 2)
  await fs.writeFile(filePath, content, 'utf-8')
}
