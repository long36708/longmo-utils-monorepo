import { getNumeralSync } from '../_internal/_numeral'

/**
 * 反格式化，自动识别格式
 * @remarks
 * format用法：http://numeraljs.com/
 * @param input - 待格式化数字
 * @returns 返回转换后的数字，无法识别返回NaN
 *
 * @example
 * ```ts
 * unformat('18:13:09') // 65589 (秒)
 * unformat('34.78%') //  0.3478
 * unformat('7,883.9876') //  7883.9876
 * unformat('￥7,883.9876') //  7883.9876
 * unformat('1.8千') //  1800
 * unformat('1.8百万') //  1800000
 * unformat('1.8十亿') //  1800000000
 * unformat('1.8兆') //  1800000000000
 * ```
 *
 * @public
 */
export function unformat (input: string = ''): number | typeof NaN {
  try {
    const numeral = getNumeralSync()
    return numeral(input).value()
  } catch (e) {
    console.warn('格式化错误，请确保已安装 numeral: npm install numeral')
    return NaN
  }
}
