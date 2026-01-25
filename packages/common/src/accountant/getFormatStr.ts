/**
 * 快速生成numeraljs格式字符串, 处理千分位和小数位，可以继续使用format方法进行格式化，小数位处理方式四舍五入
 * @remarks
 * @param options - 格式选项同数字组件的options { separate: true, point: 0 }
 * @param unit - 是否显示单位，formatType=“percent” 字段加上单位，如“%”, 其他字段使用自定义单元（如果设置了）
 * @returns 返回格式字符串
 * @example
 * ```ts
 * getFormatStr() // "0,0" 默认格式字符串
 * getFormatStr({ separate: true, point: 2 }) // '0,0.00'
 * getFormatStr({ separate: false, point: 2 }) // '00.00'
 * ```
 * @public
 */
export function getFormatStr (options = { separate: true, point: 0 }): string {
  const {
    separate,
    point,
  } = options
  let formatStr = ''
  formatStr = separate ? '0,0' : '0'
  if (point > 0) {
    formatStr += '.' + Array(point).fill(0).join('')
  }
  return formatStr
}
