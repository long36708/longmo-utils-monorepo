# 快速开始

本指南将帮助您快速上手 Longmoo Utils 工具库。

## 安装

我们推荐使用 `longmo-utils` 统一包，它包含了所有子包的功能，一次安装即可使用全部工具函数。

```bash
# 推荐：统一包（包含所有功能）
pnpm add longmo-utils
```

如果您只需要特定平台的功能，也可以单独安装对应的子包：

```bash
# 通用工具（所有环境可用）
pnpm add @longmo-utils/common

# 浏览器专用工具
pnpm add @longmo-utils/browser

# Node.js 专用工具
pnpm add @longmo-utils/node
```

## 导入

### 使用统一包（推荐）

```typescript
// 命名导入（推荐，支持 tree-shaking）
import { unique, debounce, camelCase, querySelector } from 'longmo-utils'

// 命名空间导入
import * as utils from 'longmo-utils'
```

### 使用单独的子包

```typescript
// 命名导入（推荐，支持 tree-shaking）
import { unique, debounce, camelCase } from '@longmo-utils/common'

// 命名空间导入
import * as utils from '@longmo-utils/common'
```

## 使用示例

### 数组工具

```typescript
import { unique, chunk, groupBy, range, shuffle } from 'longmo-utils'

// 去重
const uniqueArray = unique([1, 2, 2, 3, 3, 4])
// => [1, 2, 3, 4]

// 分块
const chunked = chunk([1, 2, 3, 4, 5, 6], 2)
// => [[1, 2], [3, 4], [5, 6]]

// 分组
const grouped = groupBy(
  [
    { name: 'Alice', type: 'user' },
    { name: 'Bob', type: 'admin' },
    { name: 'Charlie', type: 'user' }
  ],
  (item) => item.type
)
// => { user: [{ name: 'Alice', type: 'user' }, { name: 'Charlie', type: 'user' }], admin: [{ name: 'Bob', type: 'admin' }] }

// 创建范围
const numbers = range(1, 10, 2)
// => [1, 3, 5, 7, 9]

// 随机打乱
const shuffled = shuffle([1, 2, 3, 4, 5])
// => [3, 1, 5, 2, 4] (随机)
```

### 对象工具

```typescript
import { deepMerge, deepClone, deepEqual, get, set } from 'longmo-utils'

// 深度合并
const merged = deepMerge(
  { a: 1, b: { c: 2 } },
  { b: { d: 3 }, e: 4 }
)
// => { a: 1, b: { c: 2, d: 3 }, e: 4 }

// 深度克隆
const cloned = deepMerge({ a: { b: { c: 1 } } })
// => { a: { b: { c: 1 } } }

// 深度相等检查
const isEqual = deepEqual({ a: 1 }, { a: 1 })
// => true

// 获取嵌套值
const value = get({ user: { profile: { name: 'Alice' } } }, 'user.profile.name')
// => 'Alice'

// 设置嵌套值
const obj = {}
set(obj, 'user.profile.name', 'Alice')
// => { user: { profile: { name: 'Alice' } } }
```

### 函数工具

```typescript
import { debounce, throttle, memoize, partial } from 'longmo-utils'

// 防抖
const debouncedSearch = debounce((query: string) => {
  console.log('Searching:', query)
}, 300)

debouncedSearch('hello')
debouncedSearch('hello world') // 只会执行这一次

// 节流
const throttledScroll = throttle(() => {
  console.log('Scrolled')
}, 100)

window.addEventListener('scroll', throttledScroll)

// 记忆化
const memoizedFib = memoize((n: number): number => {
  return n <= 1 ? n : memoizedFib(n - 1) + memoizedFib(n - 2)
})

memoizedFib(10) // 只计算一次

// 偏函数
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`
const sayHello = partial(greet, 'Hello')
sayHello('World') // => 'Hello, World!'
```

### 字符串工具

```typescript
import { camelCase, kebabCase, snakeCase, truncate, capitalize, isEmpty, random } from 'longmo-utils'

// 大小写转换
camelCase('hello-world') // => 'helloWorld'
kebabCase('helloWorld') // => 'hello-world'
snakeCase('helloWorld') // => 'hello_world'

// 截断
truncate('Long string that needs truncating', 10)
// => 'Long strin...'

// 首字母大写
capitalize('hello') // => 'Hello'

// 检查空值
isEmpty('   ') // => true
isEmpty('text') // => false

// 随机字符串
random(8) // => 'xK7pN2mQ'
```

## 浏览器工具示例

```typescript
import { querySelector, addClass, removeClass, on, off, copyToClipboard } from 'longmo-utils'

// DOM 查询
const button = querySelector('.my-button')

// 类名操作
addClass(button, 'active')
removeClass(button, 'disabled')

// 事件监听
const handler = () => console.log('Clicked!')
on(button, 'click', handler)
off(button, 'click', handler)

// 剪贴板操作
await copyToClipboard('Hello, World!')
```

## Node.js 工具示例

```typescript
import { readFile, writeFile, exists, mkdir } from 'longmo-utils'

// 读取文件
const content = await readFile('data.txt', 'utf-8')

// 写入文件
await writeFile('output.txt', 'Hello, Node.js!')

// 检查文件是否存在
const fileExists = await exists('data.txt')

// 创建目录
await mkdir('data/nested/directory', { recursive: true })
```

## 统一包的优势

使用 `longmo-utils` 统一包有以下优势：

- ✅ **一次安装，全部拥有** - 无需安装多个包
- ✅ **统一的导入** - 所有功能从一个包导入
- ✅ **完整的类型支持** - 完整的 TypeScript 类型定义
- ✅ **Tree-shaking 优化** - 只打包使用的代码
- ✅ **跨平台支持** - 同时支持浏览器和 Node.js

## 更多资源

- 查看详细的 [API 文档](/api/longmo-utils/) 了解所有可用函数
- 浏览各子包的 API 文档：
  - [Common API](/api/common/) - 通用工具
  - [Browser API](/api/browser/) - 浏览器工具
  - [Node API](/api/node/) - Node.js 工具
- 学习使用工具函数的最佳实践
