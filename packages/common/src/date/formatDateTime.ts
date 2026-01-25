/**
 * 日期时间格式化模块
 */

import type { FormatDate } from './types';
import { formatDate } from './formatDate';

/**
 * 格式化日期时间
 *
 * 将日期格式化为完整的日期时间字符串（YYYY-MM-DD HH:mm:ss）
 *
 * @param time - 日期值，可以是 Date 对象、dayjs 对象、时间戳或字符串
 *
 * @returns 格式化后的日期时间字符串
 *
 * @example 格式化当前日期时间
 * ```typescript
 * formatDateTime(); // '2024-01-25 14:30:00'
 * ```
 *
 * @example 格式化指定日期
 * ```typescript
 * formatDateTime(new Date(2024, 0, 25, 14, 30, 0)); // '2024-01-25 14:30:00'
 * ```
 *
 * @example 格式化时间戳
 * ```typescript
 * formatDateTime(1706161800000); // '2024-01-25 14:30:00'
 * ```
 *
 * @example 格式化字符串日期
 * ```typescript
 * formatDateTime('2024-01-25T06:30:00Z'); // '2024-01-25 14:30:00'
 * ```
 */
export function formatDateTime(time?: FormatDate): string {
  return formatDate(time, 'YYYY-MM-DD HH:mm:ss');
}
