/**
 * 截断字符串到指定长度
 * @param str - 输入字符串
 * @param length - 最大长度
 * @param suffix - 截断时添加的后缀（默认: '...'）
 * @returns 截断后的字符串
 * @example
 * ```ts
 * truncate('hello world', 5) // 'hello...'
 * truncate('hello world', 11) // 'hello world'
 * truncate('hello world', 5, '---') // 'hello---'
 * ```
 * @public
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str
  return str.slice(0, length) + suffix
}
