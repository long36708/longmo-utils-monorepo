/**
 * 获取当前平台
 * @returns 平台名称（win32、darwin、linux 等）
 * @example
 * ```ts
 * const platform = getPlatform()
 * console.log(platform) // 'win32' | 'darwin' | 'linux'
 * ```
 * @public
 */
export function getPlatform(): NodeJS.Platform {
  return process.platform
}
