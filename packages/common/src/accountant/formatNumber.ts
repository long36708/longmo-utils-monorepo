import { getNumeralSync } from '../_internal/_numeral'

/**
 * 数字格式化
 * @remarks
 * ```
 * `0,0[.]00` - 小数位（可选）有则四舍五入保留2位小数
 * format用法：http://numeraljs.com/
 * ```
 * @param input - 待格式化数字
 * @param format - 输出格式，默认'0,0[.]00'，小数位（可选）有则四舍五入保留2位小数，自定义需手动指定格式
 * @returns 返回千分位格式化字符串
 * @example
 * ```ts
 * formatNumber(789789.025) // "789,789.03"
 * formatNumber(789789.00) // "789,789"
 * formatNumber(789789.005) // "789,789.01"
 * formatNumber(1230974, '0.0a') // 1.2千万
 * ```
 * @public
 */
export function formatNumber (input: number, format: string = '0,0[.]00'): string {
  try {
    const numeral = getNumeralSync()
    return numeral(input).format(format)
  } catch (e) {
    console.warn('数字格式化错误，请确保已安装 numeral: npm install numeral')
    return ''
  }
}
