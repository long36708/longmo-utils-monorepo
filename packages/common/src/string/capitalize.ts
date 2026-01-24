/**
 * 将字符串首字母大写
 * @param str - 输入字符串
 * @returns 首字母大写的字符串
 * @example
 * ```ts
 * capitalize('hello') // 'Hello'
 * capitalize('hello world') // 'Hello world'
 * ```
 * @public
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
