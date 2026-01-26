import { posix } from 'node:path';

/**
 * 将给定的文件路径转换为 POSIX 风格。
 *
 * @param pathname - 原始文件路径，可以是 Windows 风格或 POSIX 风格
 * @returns 转换后的 POSIX 风格路径，所有反斜杠 `\` 替换为正斜杠 `/`
 *
 * @example
 * ```ts
 * // Windows 路径转换为 POSIX
 * toPosixPath('C:\\Users\\name\\file.txt'); // 'C:/Users/name/file.txt'
 *
 * @example
 * ```ts
 * // 混合路径转换
 * toPosixPath('folder\\subfolder/file.txt'); // 'folder/subfolder/file.txt'
 *
 * @example
 * ```ts
 * // 已是 POSIX 风格的路径保持不变
 * toPosixPath('/home/user/docs/file.txt'); // '/home/user/docs/file.txt'
 * ```
 */
function toPosixPath(pathname: string) {
  return pathname.split(`\\`).join(posix.sep);
}

export { toPosixPath };
