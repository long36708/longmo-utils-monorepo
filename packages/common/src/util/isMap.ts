import { isTypeOf } from './isTypeOf'

/**
 * 是否是Map
 * @param arg - 参数
 * @returns `true|false`
 * @example
 * ```ts
 * isMap(new Map()) // true
 * ```
 *
 * @public
 */
export function isMap (arg: any): boolean {
  return isTypeOf(arg) === 'map'
}
