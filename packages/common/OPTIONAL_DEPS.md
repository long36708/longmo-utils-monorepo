# 可选依赖说明

本包提供了 `numeral` 和 `dayjs` 库的可选支持。这些是 **peer dependencies（对等依赖）**，默认不会安装。

## 安装

如果需要使用 numeral 或 dayjs 相关功能，需要手动安装：

```bash
# 安装 numeral
npm install numeral

# 安装 dayjs
npm install dayjs

# 同时安装两者
npm install numeral dayjs
```

## 使用方法

### 生产环境

推荐使用异步方式，这样可以实现懒加载，减小 bundle 体积：

```typescript
import { getNumeral, getDayjs } from '@longmo-utils/common'

// 使用 Numeral
const numeral = await getNumeral()
console.log(numeral(1000).format('$0,0.00')) // '¥1,000.00'

// 使用 Dayjs
const dayjs = await getDayjs()
console.log(dayjs().format('YYYY-MM-DD')) // '2024-01-25'
```

### 测试环境

在测试环境中，通过 vitest 的 `setupFiles` 预加载依赖后，可以使用同步版本：

```typescript
// 在测试 setup 文件中预加载
// packages/common/test/setup.ts
import { beforeAll } from 'vitest'
import { getNumeral } from '../src/_internal/_numeral'
import { getDayjs } from '../src/_internal/_dayjs'

beforeAll(async () => {
  await getNumeral()
  await getDayjs()
})

// 然后在测试代码中可以直接使用同步版本
import { getNumeralSync } from '../src/_internal/_numeral'

describe('format', () => {
  it('should format number', () => {
    const numeral = getNumeralSync() // 返回缓存实例
    expect(numeral(1000).format('$0,0.00')).toBe('¥1,000.00')
  })
})
```

**注意**：`getNumeralSync()` 和 `getDayjsSync()` 仅返回缓存的实例，如果在预加载前调用会抛出错误。

## 预配置

两个库都已预先配置了中文本地化：

- **Numeral**: 使用中文本地化，货币符号为 `¥`，千分位分隔符为 `,`
- **Dayjs**: 使用中文本地化（`zh-cn`），并包含 `quarterOfYear`（季度）插件

## 内部实现

### 懒加载机制

使用模块级变量缓存加载的实例，避免重复加载：

```typescript
// _numeral.ts
let _numeral: any = null

export async function getNumeral() {
  if (_numeral) return _numeral
  
  const numeral = await import('numeral')
  // 配置中文本地化...
  _numeral = numeral.default
  return _numeral
}

export function getNumeralSync() {
  if (_numeral) return _numeral
  
  throw new Error('numeral 未加载。请确保在测试 setup 文件中调用 await getNumeralSync() 预加载')
}
```

### ESM 动态导入

使用 `import()` 动态导入，这是 ESM 标准的动态导入方式，不需要使用 `require()`。

## 错误处理

如果未安装依赖就使用会抛出错误：

```typescript
import { getNumeral } from '@longmo-utils/common'

try {
  const numeral = await getNumeral()
} catch (error) {
  console.error(error.message)
  // 动态导入失败，numeral 未安装
}
```

## 注意事项

- `_internal` 目录中的函数仅供包内部使用，不建议直接引用
- 异步方式可以避免打包时将这些库包含在 bundle 中
- 使用时请确保已安装相应的依赖库
- 在测试环境中，必须通过 `setupFiles` 预加载依赖后才能使用同步版本
