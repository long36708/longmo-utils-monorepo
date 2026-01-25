import { getNumeralSync } from '../_internal/_numeral'

/**
 * 金额格式化
 * @remarks
 * ```
 * `0,0.00`：尾端保留2位小数，四舍五入
 * format用法：http://numeraljs.com/
 * ```
 * @param input - 待格式化金额
 * @param format - 输出格式，默认'0,0.00'，尾端保留2位小数，四舍五入，自定义需手动指定格式
 * @returns 返回千分位格式化字符串
 * @example
 * ```ts
 * formatMoney(1000.234) // 1,000.23
 * formatMoney(1000.235) // 1,000.24
 * formatMoney(1000.235, '$0,0.00') // ¥1,000.24 只设置货币
 * formatNumber(1230974, '0.0a') // 1.2千万
 * ```
 * @public
 */
export function formatMoney (input: number, format: string = '0,0.00'): string {
  try {
    const numeral = getNumeralSync()
    return numeral(input).format(format)
  } catch (e) {
    console.warn('金额格式化错误，请确保已安装 numeral: npm install numeral')
    return ''
  }
}
