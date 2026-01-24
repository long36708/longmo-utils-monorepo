/**
 * 将字符串转换为短横线命名
 * @param str - 输入字符串
 * @returns 短横线命名字符串
 * @example
 * ```ts
 * kebabCase('helloWorld') // 'hello-world'
 * kebabCase('hello_world') // 'hello-world'
 * kebabCase('hello world') // 'hello-world'
 * ```
 * @public
 */
export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
