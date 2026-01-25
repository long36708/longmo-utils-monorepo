import { DownloadOptions } from './types';
import { triggerDownload } from './triggerDownload';
import { DEFAULT_FILENAME } from './constants';

/**
 * 通过 Blob 对象下载文件
 *
 * @param options - 下载选项
 * @param options.fileName - 下载文件名，默认为 'downloaded_file'
 * @param options.source - Blob 对象
 *
 * @throws {TypeError} - 当源数据不是 Blob 对象时抛出错误
 *
 * @example 下载文本 Blob
 * ```typescript
 * const textBlob = new Blob(['Hello World'], { type: 'text/plain' });
 * downloadFileFromBlob({
 *   source: textBlob,
 *   fileName: 'hello.txt'
 * });
 * ```
 *
 * @example 下载 JSON Blob
 * ```typescript
 * const jsonData = { name: 'test', value: 123 };
 * const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
 * downloadFileFromBlob({
 *   source: jsonBlob,
 *   fileName: 'data.json'
 * });
 * ```
 */
export function downloadFileFromBlob({
  fileName = DEFAULT_FILENAME,
  source,
}: DownloadOptions<Blob>): void {
  if (!(source instanceof Blob)) {
    throw new TypeError('Invalid Blob data.');
  }

  const url = URL.createObjectURL(source);
  triggerDownload(url, fileName);
}
