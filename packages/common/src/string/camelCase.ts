/**
 * 将字符串转换为驼峰命名
 * @param str - 输入字符串
 * @returns 驼峰命名字符串
 * @example
 * ```ts
 * camelCase('hello-world') // 'helloWorld'
 * camelCase('hello_world') // 'helloWorld'
 * camelCase('hello world') // 'helloWorld'
 * ```
 * @public
 */
export function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char?.toUpperCase() || '')
    .replace(/^(.)/, (_, char) => char?.toLowerCase() || '')
}
