/**
 * 下载功能工具函数
 */

import { DEFAULT_FILENAME } from './constants';

/**
 * 解析文件名
 *
 * 从 URL 中提取文件名，如果未提供文件名或 URL 中没有文件名，则使用默认文件名
 *
 * @param url - 文件 URL 地址
 * @param fileName - 指定的文件名（可选）
 *
 * @returns string - 解析后的文件名
 *
 * @example 使用指定文件名
 * ```typescript
 * const name = resolveFileName('https://example.com/file.pdf', 'custom.pdf');
 * console.log(name); // 'custom.pdf'
 * ```
 *
 * @example 从 URL 提取文件名
 * ```typescript
 * const name = resolveFileName('https://example.com/path/to/document.pdf');
 * console.log(name); // 'document.pdf'
 * ```
 *
 * @example 使用默认文件名
 * ```typescript
 * const name = resolveFileName('https://example.com/path/');
 * console.log(name); // 'downloaded_file'
 * ```
 */
export function resolveFileName(
  url: string,
  fileName?: string,
): string {
  return fileName || url.slice(url.lastIndexOf('/') + 1) || DEFAULT_FILENAME;
}

