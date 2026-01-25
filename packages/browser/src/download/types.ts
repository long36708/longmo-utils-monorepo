/**
 * 下载功能类型定义
 */

/**
 * 下载选项接口
 *
 * @typeParam T - 源数据类型，默认为 string
 *
 * @property fileName - 下载文件名
 * @property source - 文件源数据
 * @property target - 打开目标，默认为 '_blank'
 */
export interface DownloadOptions<T = string> {
  fileName?: string;
  source: T;
  target?: string;
}
