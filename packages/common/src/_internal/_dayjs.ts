let _dayjs: any = null

/**
 * 异步获取 Dayjs 实例（已配置中文本地化和季度插件）
 * 这是一个懒加载导入，避免将 dayjs 作为直接依赖
 *
 * @example
 * ```ts
 * const dayjs = await getDayjs()
 * dayjs().format('YYYY-MM-DD') // '2024-01-25'
 * ```
 */
export async function getDayjs() {
  if (_dayjs) return _dayjs
  
  const dayjs = await import('dayjs')
  const quarterOfYear = await import('dayjs/plugin/quarterOfYear')
  await import('dayjs/locale/zh-cn')

  dayjs.default.extend(quarterOfYear.default)
  dayjs.default.locale('zh-cn')

  _dayjs = dayjs.default
  return _dayjs
}

/**
 * 同步获取 Dayjs 实例（仅用于测试环境）
 * 使用 ESM 动态导入，配合 vitest setupFiles 预加载使用
 *
 * 注意：此函数本质是异步的，但为了保持 API 一致性命名为 sync
 * 请确保在测试运行前通过 setupFiles 预加载
 *
 * @throws {Error} 如果 dayjs 未安装
 *
 * @example
 * ```ts
 * // 在测试 setup 文件中预加载
 * import { getDayjsSync } from './_dayjs'
 * await getDayjsSync()
 * 
 * // 然后在代码中可以直接使用
 * const dayjs = getDayjsSync() // 返回缓存实例
 * ```
 */
export function getDayjsSync() {
  if (_dayjs) return _dayjs
  
  throw new Error(
    'dayjs 未加载。请确保在测试 setup 文件中调用 await getDayjsSync() 预加载'
  )
}

export default getDayjs
