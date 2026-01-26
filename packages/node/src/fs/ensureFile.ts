import {dirname} from "node:path";
import {promises as fs} from "node:fs";

/**
 * 确保指定文件路径存在。如果文件不存在，则创建文件及其所有必要的父目录。
 *
 * @param filePath - 要确保存在的文件路径
 * @returns Promise<void>
 *
 * @example
 * ```ts
 * await ensureFile('/path/to/file.txt');
 * ```
 */
export async function ensureFile(filePath: string) {
  try {
    const dir = dirname(filePath);
    await fs.mkdir(dir, {recursive: true});
    await fs.writeFile(filePath, '', {flag: 'a'});
  } catch (error) {
    console.error('Error ensuring file:', error);
    throw error;
  }
}
