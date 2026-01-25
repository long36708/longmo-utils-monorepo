/**
 * 窗口操作类型定义
 */

/**
 * 打开窗口选项接口
 *
 * @property noopener - 是否启用 noopener，默认为 true
 * @property noreferrer - 是否启用 noreferrer，默认为 true
 * @property target - 打开目标窗口，默认为 '_blank'
 */
export interface OpenWindowOptions {
  noopener?: boolean;
  noreferrer?: boolean;
  target?: '_blank' | '_parent' | '_self' | '_top' | string;
}
