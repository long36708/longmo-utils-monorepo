import type { OpenWindowOptions } from './types';

/**
 * 在新窗口中打开 URL
 *
 * 使用 window.open 方法打开指定 URL，支持配置窗口行为和安全特性
 *
 * @param url - 需要打开的网址
 * @param options - 打开窗口的选项
 * @param options.noopener - 是否启用 noopener，默认为 true
 * @param options.noreferrer - 是否启用 noreferrer，默认为 true
 * @param options.target - 打开目标窗口，默认为 '_blank'
 *
 * @example 打开新窗口
 * ```typescript
 * openWindow('https://example.com');
 * ```
 *
 * @example 在当前窗口打开
 * ```typescript
 * openWindow('https://example.com', { target: '_self' });
 * ```
 *
 * @example 禁用安全特性
 * ```typescript
 * openWindow('https://example.com', {
 *   noopener: false,
 *   noreferrer: false
 * });
 * ```
 *
 * @example 在父窗口打开
 * ```typescript
 * openWindow('https://example.com', { target: '_parent' });
 * ```
 */
export function openWindow(
  url: string,
  options: OpenWindowOptions = {}
): void {
  // 解构并设置默认值
  const {
    noopener = true,
    noreferrer = true,
    target = '_blank'
  } = options;

  // 基于选项创建特性字符串
  const features = [
    noopener && 'noopener=yes',
    noreferrer && 'noreferrer=yes'
  ]
    .filter(Boolean)
    .join(',');

  // 打开窗口
  window.open(url, target, features);
}
