/**
 * 日期时间类型定义
 */

import type { Dayjs } from 'dayjs';

/**
 * 日期输入类型
 */
export type FormatDate = Date | Dayjs | number | string;

/**
 * 日期格式类型
 */
export type Format =
  | 'HH'
  | 'HH:mm'
  | 'HH:mm:ss'
  | 'YYYY'
  | 'YYYY-MM'
  | 'YYYY-MM-DD'
  | 'YYYY-MM-DD HH'
  | 'YYYY-MM-DD HH:mm'
  | 'YYYY-MM-DD HH:mm:ss'
  | (string & {});
