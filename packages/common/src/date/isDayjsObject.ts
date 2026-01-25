/**
 * dayjs 对象类型检查模块
 */

import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

/**
 * 检查值是否为 dayjs 对象
 *
 * 使用 dayjs.isDayjs 方法判断一个值是否为 dayjs 对象
 *
 * @param value - 要检查的值
 * @returns 是否为 dayjs 对象
 *
 * @example 检查 dayjs 对象
 * ```typescript
 * const date = dayjs();
 * isDayjsObject(date); // true
 * ```
 *
 * @example 检查非 dayjs 对象
 * ```typescript
 * isDayjsObject(new Date()); // false
 * isDayjsObject('2024-01-25'); // false
 * isDayjsObject(123456); // false
 * ```
 *
 * @example 类型守卫
 * ```typescript
 * function process(value: unknown) {
 *   if (isDayjsObject(value)) {
 *     console.log(value.format('YYYY-MM-DD')); // TypeScript 知道 value 是 Dayjs
 *   }
 * }
 * ```
 */
export function isDayjsObject(value: unknown): value is Dayjs {
  return dayjs.isDayjs(value);
}
