import { DownloadOptions } from './types';
import { urlToBase64 } from './urlToBase64';
import { downloadFileFromBase64 } from './downloadFileFromBase64';

/**
 * 通过图片 URL 下载图片文件
 *
 * @param options - 下载选项
 * @param options.fileName - 下载文件名
 * @param options.source - 图片 URL
 *
 * @example 下载网络图片
 * ```typescript
 * await downloadFileFromImageUrl({
 *   source: 'https://example.com/image.jpg',
 *   fileName: 'downloaded-image.jpg'
 * });
 * ```
 *
 * @example 下载 SVG 图片
 * ```typescript
 * await downloadFileFromImageUrl({
 *   source: 'https://example.com/icon.svg',
 *   fileName: 'icon.svg'
 * });
 * ```
 */
export async function downloadFileFromImageUrl({
  fileName,
  source,
}: DownloadOptions) {
  const base64 = await urlToBase64(source);
  downloadFileFromBase64({ fileName, source: base64 });
}
