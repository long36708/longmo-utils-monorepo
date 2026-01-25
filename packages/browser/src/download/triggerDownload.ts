/**
 * 通用下载触发函数
 *
 * 通过创建临时 `<a>` 标签并触发点击事件来下载文件，支持自动清理内存
 *
 * @param href - 文件下载的 URL 或 Blob URL
 * @param fileName - 下载文件的名称，如果未提供则使用默认值
 * @param revokeDelay - 清理 URL 的延迟时间（毫秒），默认为 100ms
 *
 * @example 下载文件
 * ```typescript
 * triggerDownload('https://example.com/file.pdf', 'document.pdf');
 * ```
 *
 * @example 使用 Blob URL
 * ```typescript
 * const blob = new Blob(['content'], { type: 'text/plain' });
 * const blobUrl = URL.createObjectURL(blob);
 * triggerDownload(blobUrl, 'file.txt', 200);
 * ```
 *
 * @example 使用默认文件名
 * ```typescript
 * triggerDownload('https://example.com/data.json', undefined);
 * ```
 */
export function triggerDownload(
  href: string,
  fileName: string | undefined,
  revokeDelay: number = 100,
): void {
  const defaultFileName = 'downloaded_file';
  const finalFileName = fileName || defaultFileName;

  const link = document.createElement('a');
  link.href = href;
  link.download = finalFileName;
  link.style.display = 'none';

  if (link.download === undefined) {
    link.setAttribute('target', '_blank');
  }

  document.body.append(link);
  link.click();
  link.remove();

  // 清理临时 URL 以释放内存
  setTimeout(() => URL.revokeObjectURL(href), revokeDelay);
}
