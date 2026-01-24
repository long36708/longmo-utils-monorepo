/**
 * 获取当前工作目录
 * @returns 当前工作目录路径
 * @example
 * ```ts
 * const cwd = getCwd()
 * console.log(cwd) // '/path/to/current/directory'
 * ```
 * @public
 */
export function getCwd(): string {
  return process.cwd()
}
