import { beforeAll } from 'vitest'
import { getNumeral } from '../src/_internal/_numeral'
import { getDayjs } from '../src/_internal/_dayjs'

// 预加载 numeral 和 dayjs（使用异步加载，然后缓存在模块级变量中）
beforeAll(async () => {
  await getNumeral()
  await getDayjs()
})
