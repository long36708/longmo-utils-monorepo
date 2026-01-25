/**
 * 日期格式化模块
 */

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);
dayjs.extend(timezone);

import type { FormatDate, Format } from './types';

/**
 * 格式化日期
 *
 * 将各种日期格式转换为指定格式的字符串，支持时区转换
 *
 * @param time - 日期值，可以是 Date 对象、dayjs 对象、时间戳或字符串
 * @param format - 输出格式，默认为 'YYYY-MM-DD'
 *
 * @returns 格式化后的日期字符串
 *
 * @example 格式化为日期
 * ```typescript
 * formatDate(new Date()); // '2024-01-25'
 * ```
 *
 * @example 格式化为日期时间
 * ```typescript
 * formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'); // '2024-01-25 14:30:00'
 * ```
 *
 * @example 格式化为时间
 * ```typescript
 * formatDate(new Date(), 'HH:mm:ss'); // '14:30:00'
 * ```
 *
 * @example 格式化时间戳
 * ```typescript
 * formatDate(1706161800000, 'YYYY-MM-DD'); // '2024-01-25'
 * ```
 *
 * @example 格式化日期字符串
 * ```typescript
 * formatDate('2024-01-25T06:30:00Z', 'YYYY-MM-DD HH:mm'); // '2024-01-25 14:30'
 * ```
 *
 * @example 使用 dayjs 对象
 * ```typescript
 * import dayjs from 'dayjs';
 * const date = dayjs('2024-01-25');
 * formatDate(date, 'YYYY/MM/DD'); // '2024/01/25'
 * ```
 */
export function formatDate(
  time?: FormatDate,
  format: Format = 'YYYY-MM-DD',
): string {
  try {
    const date = dayjs.isDayjs(time) ? time : dayjs(time);
    if (!date.isValid()) {
      throw new Error('Invalid date');
    }
    return date.tz().format(format);
  } catch (error) {
    console.error(`Error formatting date: ${error}`);
    return String(time ?? '');
  }
}
