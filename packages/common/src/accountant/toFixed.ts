import { getNumeralSync } from '../_internal/_numeral'

/**
 * 数字格式化，指定需要保留的小数位数，解决部分浏览器兼容性问题，如`(0.615).toFixed(2) === '0.61');`
 * @remarks
 * ```
 * 修复Number.prototype.toFixed兼容性问题
 * `(0.615).toFixed(2) === '0.61');`，按照银行家法原则应该是0.62''
 * 位数不够，后面补0
 * ```
 * @param number - 需要转换的数字
 * @param digits - 需要保留的位数，只允许 [0, 20] 之间的数字
 * @returns 返回格式化后的字符串
 * @example
 * ```ts
 * toFixed(25.198726354, 0);       // 25
 * toFixed(25.198726354, 1);       // 25.2
 * toFixed(25.198726354, 2);       // 25.20
 * toFixed(25.198726354, 3);       // 25.199
 * toFixed(25.198726354, 4);       // 25.1987
 * toFixed(25.198726354, 5);       // 25.19873
 * toFixed(25.198726354, 6);       // 25.198726
 * toFixed(25, 2);                 // 25.00
 * toFixed(25.125, 4);             // 25.1250
 * ```
 * @public
 */
export function toFixed (number: number, digits: number = 2): string {

  // return ~~(Math.pow(10, digits) * number) / Math.pow(10, digits);
  if (digits < 0) {
    digits = 0
  }
  if (digits > 20) {
    digits = 20
  }
  const numeral = getNumeralSync()
  return numeral._.toFixed(number, digits, Math.round)
}
