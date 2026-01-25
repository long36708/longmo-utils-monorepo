import { openWindow } from '../window';
import { DownloadOptions } from './types';
import { triggerDownload } from './triggerDownload';
import { resolveFileName } from './utils';

/**
 * 通过 URL 下载文件，支持跨域
 *
 * @param options - 下载选项
 * @param options.fileName - 下载文件名
 * @param options.source - 文件 URL
 * @param options.target - 打开目标，默认为 '_blank'
 *
 * @throws {Error} - 当下载失败时抛出错误
 *
 * @example 下载 URL 文件
 * ```typescript
 * await downloadFileFromUrl({
 *   source: 'https://example.com/file.pdf',
 *   fileName: 'document.pdf'
 * });
 * ```
 *
 * @example 跨域下载
 * ```typescript
 * await downloadFileFromUrl({
 *   source: 'https://cdn.example.com/image.jpg',
 *   fileName: 'image.jpg'
 * });
 * ```
 */
export async function downloadFileFromUrl({
  fileName,
  source,
  target = '_blank',
}: DownloadOptions): Promise<void> {
  if (!source || typeof source !== 'string') {
    throw new Error('Invalid URL.');
  }

  const isChrome = window.navigator.userAgent.toLowerCase().includes('chrome');
  const isSafari = window.navigator.userAgent.toLowerCase().includes('safari');

  if (/iP/.test(window.navigator.userAgent)) {
    console.error('Your browser does not support download!');
    return;
  }

  if (isChrome || isSafari) {
    triggerDownload(source, resolveFileName(source, fileName));
    return;
  }
  if (!source.includes('?')) {
    source += '?download';
  }

  openWindow(source, { target });
}
