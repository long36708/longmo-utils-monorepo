/**
 * 获取 Node.js 版本
 * @returns Node.js 版本字符串
 * @example
 * ```ts
 * const version = getNodeVersion()
 * console.log(version) // 'v18.0.0'
 * ```
 * @public
 */
export function getNodeVersion(): string {
  return process.version
}
