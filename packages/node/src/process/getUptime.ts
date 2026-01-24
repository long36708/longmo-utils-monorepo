/**
 * 获取进程运行时间（秒）
 * @returns 运行时间（秒）
 * @example
 * ```ts
 * const uptime = getUptime()
 * console.log(uptime) // 3600
 * ```
 * @public
 */
export function getUptime(): number {
  return process.uptime()
}
