import { getNumeralSync } from '../_internal/_numeral'

/**
 * 百分比格式化
 * @remarks
 * ```
 * `0.[00]%` - 小数位（可选）有则四舍五入保留2位小数
 * format用法：http://numeraljs.com/
 * ```
 * @param input - 待格式化数字
 * @param format - 输出格式，默认'0.[00]%'，小数位（可选）有则四舍五入保留2位小数，自定义需手动指定格式
 * @returns 返回百分比格式化字符串
 * @example
 * ```ts
 * formatPercentage(0.4567) // "45.67%"
 * formatPercentage(0.456) // "45.6%"
 * formatPercentage(0.45600) // "46%"
 * formatPercentage(0.4567, '0.00%') // "45.67%"
 * ```
 * @public
 */
export function formatPercentage (input: number, format: string = '0.00%'): string {
  try {
    const numeral = getNumeralSync()
    return numeral(input).format(format)
  } catch (e) {
    console.warn('百分比格式化错误，请确保已安装 numeral: npm install numeral')
    return ''
  }
}
