import { DownloadOptions } from './types';
import { triggerDownload } from './triggerDownload';
import { DEFAULT_FILENAME } from './constants';

/**
 * 通过 Base64 数据下载文件
 *
 * @param options - 下载选项
 * @param options.fileName - 下载文件名
 * @param options.source - Base64 编码的文件数据
 *
 * @throws {Error} - 当 Base64 数据无效时抛出错误
 *
 * @example 下载 Base64 图片
 * ```typescript
 * downloadFileFromBase64({
 *   source: 'data:image/png;base64,iVBORw0KGgoAAAANS...',
 *   fileName: 'image.png'
 * });
 * ```
 *
 * @example 使用默认文件名
 * ```typescript
 * downloadFileFromBase64({
 *   source: 'data:text/plain;base64,SGVsbG8gV29ybGQ='
 * });
 * ```
 */
export function downloadFileFromBase64({ fileName, source }: DownloadOptions) {
  if (!source || typeof source !== 'string') {
    throw new Error('Invalid Base64 data.');
  }

  const resolvedFileName = fileName || DEFAULT_FILENAME;
  triggerDownload(source, resolvedFileName);
}
