import { DownloadOptions } from './types';
import { triggerDownload } from './triggerDownload';
import { DEFAULT_FILENAME } from './constants';

/**
 * 通过 BlobPart 数据下载文件
 *
 * 支持 Blob、字符串和其他 BlobPart 类型，如果不是 Blob 会自动转换
 *
 * @param options - 下载选项
 * @param options.fileName - 下载文件名，默认为 'downloaded_file'
 * @param options.source - BlobPart 数据 (Blob、字符串、ArrayBuffer 等)
 *
 * @example 下载字符串
 * ```typescript
 * downloadFileFromBlobPart({
 *   source: 'Hello World',
 *   fileName: 'text.txt'
 * });
 * ```
 *
 * @example 下载 ArrayBuffer
 * ```typescript
 * const arrayBuffer = new Uint8Array([72, 101, 108, 108, 111]);
 * downloadFileFromBlobPart({
 *   source: arrayBuffer,
 *   fileName: 'data.bin'
 * });
 * ```
 *
 * @example 下载 Blob 对象
 * ```typescript
 * const blob = new Blob(['content'], { type: 'text/plain' });
 * downloadFileFromBlobPart({
 *   source: blob,
 *   fileName: 'file.txt'
 * });
 * ```
 */
export function downloadFileFromBlobPart({
  fileName = DEFAULT_FILENAME,
  source,
}: DownloadOptions<BlobPart>): void {
  // 如果 data 不是 Blob，则转换为 Blob
  const blob =
    source instanceof Blob
      ? source
      : new Blob([source], { type: 'application/octet-stream' });

  // 创建对象 URL 并触发下载
  const url = URL.createObjectURL(blob);
  triggerDownload(url, fileName);
}
