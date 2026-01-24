/**
 * 将字符串转换为下划线命名
 * @param str - 输入字符串
 * @returns 下划线命名字符串
 * @example
 * ```ts
 * snakeCase('helloWorld') // 'hello_world'
 * snakeCase('hello-world') // 'hello_world'
 * snakeCase('hello world') // 'hello_world'
 * ```
 * @public
 */
export function snakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase()
}
