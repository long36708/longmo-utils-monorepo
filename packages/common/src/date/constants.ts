/**
 * 日期时间常量
 */

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * 获取当前时区
 *
 * @returns 当前时区名称（如 'Asia/Shanghai'）
 *
 * @example 获取系统时区
 * ```typescript
 * const tz = getSystemTimezone();
 * console.log(tz); // 'Asia/Shanghai'
 * ```
 */
export const getSystemTimezone = (): string => {
  return dayjs.tz.guess();
};

/**
 * 自定义设置的时区
 */
let currentTimezone = getSystemTimezone();

/**
 * 设置默认时区
 *
 * 设置后续所有日期操作使用的时区
 *
 * @param timezone - 时区字符串，如果为空则使用系统时区
 *
 * @example 设置为东八区
 * ```typescript
 * setCurrentTimezone('Asia/Shanghai');
 * ```
 *
 * @example 设置为 UTC
 * ```typescript
 * setCurrentTimezone('UTC');
 * ```
 *
 * @example 重置为系统时区
 * ```typescript
 * setCurrentTimezone();
 * ```
 */
export const setCurrentTimezone = (timezone?: string): void => {
  currentTimezone = timezone || getSystemTimezone();
  dayjs.tz.setDefault(currentTimezone);
};

/**
 * 获取设置的时区
 *
 * @returns 当前设置的时区名称
 *
 * @example 获取当前时区
 * ```typescript
 * setCurrentTimezone('Asia/Tokyo');
 * const tz = getCurrentTimezone();
 * console.log(tz); // 'Asia/Tokyo'
 * ```
 */
export const getCurrentTimezone = (): string => {
  return currentTimezone;
};
