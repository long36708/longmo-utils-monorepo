/**
 * 日期实例类型检查模块
 */

/**
 * 检查值是否为 Date 实例
 *
 * 使用 instanceof 操作符判断一个值是否为 Date 对象
 *
 * @param value - 要检查的值
 * @returns 是否为 Date 实例
 *
 * @example 检查 Date 对象
 * ```typescript
 * const date = new Date();
 * isDateInstance(date); // true
 * ```
 *
 * @example 检查非 Date 对象
 * ```typescript
 * isDateInstance('2024-01-25'); // false
 * isDateInstance(123456); // false
 * isDateInstance(null); // false
 * ```
 *
 * @example 类型守卫
 * ```typescript
 * function process(value: unknown) {
 *   if (isDateInstance(value)) {
 *     console.log(value.getFullYear()); // TypeScript 知道 value 是 Date
 *   }
 * }
 * ```
 */
export function isDateInstance(value: unknown): value is Date {
  return value instanceof Date;
}
