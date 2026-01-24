/**
 * 检查当前平台是否为 Linux
 * @returns 是否为 Linux
 * @example
 * ```ts
 * if (isLinux()) {
 *   console.log('Running on Linux')
 * }
 * ```
 * @public
 */
export function isLinux(): boolean {
  return process.platform === 'linux'
}
