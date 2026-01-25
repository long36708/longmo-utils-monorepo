let _numeral: any = null

/**
 * 异步获取 Numeral 实例（已配置中文本地化）
 * 这是一个懒加载导入，避免将 numeral 作为直接依赖
 *
 * @example
 * ```ts
 * const numeral = await getNumeral()
 * numeral(1000).format('$0,0.00') // '¥1,000.00'
 * ```
 */
export async function getNumeral() {
  if (_numeral) return _numeral
  
  const numeral = await import('numeral')

  numeral.register('locale', 'ch', {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: '千',
      million: '百万',
      billion: '十亿',
      trillion: '兆'
    },
    ordinal: function () {
      return '.'
    },
    currency: {
      symbol: '¥'
    }
  })

  numeral.locale('ch')

  _numeral = numeral.default
  return _numeral
}

/**
 * 同步获取 Numeral 实例（仅用于测试环境）
 * 使用 ESM 动态导入，配合 vitest setupFiles 预加载使用
 * 
 * 注意：此函数本质是异步的，但为了保持 API 一致性命名为 sync
 * 请确保在测试运行前通过 setupFiles 预加载
 *
 * @throws {Error} 如果 numeral 未安装
 *
 * @example
 * ```ts
 * // 在测试 setup 文件中预加载
 * import { getNumeralSync } from './_numeral'
 * await getNumeralSync()
 * 
 * // 然后在代码中可以直接使用
 * const numeral = getNumeralSync() // 返回缓存实例
 * ```
 */
export function getNumeralSync() {
  if (_numeral) return _numeral
  
  throw new Error(
    'numeral 未加载。请确保在测试 setup 文件中调用 await getNumeralSync() 预加载'
  )
}

export default getNumeral
