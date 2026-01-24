/**
 * 退出当前进程
 * @param code - 退出码（默认: 0）
 * @returns never
 * @example
 * ```ts
 * exit(0) // 正常退出
 * exit(1) // 异常退出
 * ```
 * @public
 */
export function exit(code: number = 0): never {
  process.exit(code)
}
