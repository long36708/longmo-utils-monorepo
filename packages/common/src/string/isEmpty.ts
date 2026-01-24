/**
 * 检查字符串是否为空或只包含空白字符
 * @param str - 输入字符串
 * @returns 如果为空或只包含空白字符返回 true
 * @example
 * ```ts
 * isEmpty('') // true
 * isEmpty('   ') // true
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty('hello') // false
 * ```
 * @public
 */
export function isEmpty(str: string | null | undefined): boolean {
  return !str || str.trim().length === 0
}
