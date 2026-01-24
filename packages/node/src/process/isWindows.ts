/**
 * 检查当前平台是否为 Windows
 * @returns 是否为 Windows
 * @example
 * ```ts
 * if (isWindows()) {
 *   console.log('Running on Windows')
 * }
 * ```
 * @public
 */
export function isWindows(): boolean {
  return process.platform === 'win32'
}
