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
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    throw error;
  }
}
