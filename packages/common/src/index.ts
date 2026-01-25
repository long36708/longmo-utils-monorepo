/**
 * @longmo-utils/common
 * 通用工具函数库，无平台依赖
 */
export * from './_internal/_version'
export * from './array'
export * from './object'
export * from './function'
export * from './string'
export * from './util'
export * from './url'
export * from './accountant'
export * from './color'
export * from './date'
export * from './tree'

// 内部可选依赖导出（仅供包内部使用）
export { getNumeral, getNumeralSync } from './_internal/_numeral'
export { getDayjs, getDayjsSync } from './_internal/_dayjs'
