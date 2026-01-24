/**
 * 获取进程 ID
 * @returns 进程 ID
 * @example
 * ```ts
 * const pid = getPid()
 * console.log(pid) // 12345
 * ```
 * @public
 */
export function getPid(): number {
  return process.pid
}
