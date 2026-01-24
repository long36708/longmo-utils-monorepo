/**
 * 生成指定长度的随机字符串
 * @param length - 随机字符串的长度（默认: 8）
 * @returns 随机字符串
 * @example
 * ```ts
 * random() // 'aB3dE7fG'
 * random(12) // 'xY9kL2mN3pQ'
 * ```
 * @public
 */
export function random(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
