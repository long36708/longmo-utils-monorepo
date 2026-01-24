/**
 * 检查当前平台是否为 macOS
 * @returns 是否为 macOS
 * @example
 * ```ts
 * if (isMac()) {
 *   console.log('Running on macOS')
 * }
 * ```
 * @public
 */
export function isMac(): boolean {
  return process.platform === 'darwin'
}
