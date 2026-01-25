import { getNumeralSync } from '../_internal/_numeral'

/**
 * 通用格式化，需要手动指定格式
 * @remarks
 * format用法：http://numeraljs.com/
 * @param input - 待格式化数字
 * @param format - 输出格式，默认''，默认不保留小数，格式整数
 * @returns 返回格式化字符串
 * @example
 * ```ts
 * format(1230974.998979).format() // "1,230,975"
 * ```
 * @public
 */
export function format (input: number, format: string = ''): string {
  try {
    const numeral = getNumeralSync()
    return numeral(input).format(format)
  } catch (e) {
    console.warn('格式化错误，请确保已安装 numeral: npm install numeral')
    return ''
  }
}
