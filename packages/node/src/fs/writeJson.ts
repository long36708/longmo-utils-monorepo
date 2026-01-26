import { promises as fs } from 'fs'
import {dirname} from "node:path";

/**
 * 将数据写入 JSON 文件
 * @param filePath - 文件路径
 * @param data - 要写入的数据
 * @param spaces - 缩进空格数
 * @example
 * ```ts
 * await writeJson('./config.json', { name: 'test' })
 * ```
 * @public
 */
export async function writeJson(filePath: string, data: any,spaces: number = 2,): Promise<void> {
  try {
    const dir = dirname(filePath);
    await fs.mkdir(dir, { recursive: true });
    const jsonData = JSON.stringify(data, null, spaces);
    await fs.writeFile(filePath, jsonData, 'utf8');
  } catch (error) {
    console.error('Error writing JSON file:', error);
    throw error;
  }
}
