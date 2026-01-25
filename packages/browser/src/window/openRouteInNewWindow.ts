import { openWindow } from './openWindow';

/**
 * 在新窗口中打开当前应用的路由
 *
 * 基于当前页面的 origin 和 hash 构建完整的路由地址，然后在新窗口中打开
 *
 * @param path - 路由路径
 *
 * @example 打开路由
 * ```typescript
 * openRouteInNewWindow('/dashboard');
 * ```
 *
 * @example 打开带参数的路由
 * ```typescript
 * openRouteInNewWindow('/user/profile?id=123');
 * ```
 *
 * @example 不带前导斜杠
 * ```typescript
 * openRouteInNewWindow('settings');
 * // 等同于 '/settings'
 * ```
 *
 * @example 在 Hash 路由模式下
 * ```typescript
 * // 当前 URL: https://example.com/#/home
 * openRouteInNewWindow('/about');
 * // 将打开: https://example.com/#/about
 * ```
 */
export function openRouteInNewWindow(path: string): void {
  const { hash, origin } = location;
  const fullPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${origin}${hash && !fullPath.startsWith('/#') ? '/#' : ''}${fullPath}`;
  openWindow(url, { target: '_blank' });
}
