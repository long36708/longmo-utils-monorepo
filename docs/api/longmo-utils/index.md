# longmo-utils

统一的工具库包，整合了 browser、common 和 node 三个子包的所有功能。

## 概述

`longmo-utils` 是一个通用的工具库包，整合了以下三个子包的所有功能：

- `@longmo-utils/common` - 通用工具函数（无平台依赖）
- `@longmo-utils/browser` - 浏览器专用工具（DOM/BOM）
- `@longmo-utils/node` - Node.js 专用工具（文件系统等）

## 特性

- 📦 **一次安装，获得所有工具函数** - 无需分别安装多个包
- 🌍 **支持浏览器和 Node.js 环境** - 真正的跨平台工具库
- ⚡ **完整的 TypeScript 类型支持** - 开发体验更佳
- 🌳 **支持 tree-shaking** - 只打包使用的代码，优化产物体积

## 安装

```bash
pnpm install longmo-utils
```

## 使用

### Common 工具（所有环境可用）

```typescript
import { deepClone, debounce, throttle } from 'longmo-utils'

// 深度克隆
const cloned = deepClone({ a: { b: 1 } })

// 防抖函数
const debouncedFn = debounce(() => {
  console.log('Called after delay')
}, 300)
```

### 浏览器工具（需要 DOM/BOM API）

```typescript
import { querySelector, addClass, copyToClipboard } from 'longmo-utils'

// DOM 操作
const el = querySelector('.my-element')
addClass(el, 'active')

// 剪贴板操作
await copyToClipboard('Hello, World!')
```

### Node.js 工具（需要 Node.js 环境）

```typescript
import { readFile, writeFile } from 'longmo-utils'

// 文件操作
const content = await readFile('file.txt', 'utf-8')
await writeFile('output.txt', 'Hello, Node.js!')
```

### 导入所有

```typescript
import * as utils from 'longmo-utils'
// utils.deepClone()
// utils.querySelector()
// utils.readFile()
// 等等...
```

## Tree-shaking 优化

由于依赖了三个子包，打包工具（如 Vite、Webpack、Rollup）会自动进行 tree-shaking，只将你实际使用的代码打包进最终产物。

例如，如果你只使用了 `debounce` 函数，即使导入了整个包，最终产物也只会包含 `debounce` 的代码。

## 性能说明

| 指标 | 数值 |
|------|------|
| **安装体积** | 约 58KB（包含三个子包） |
| **最终产物体积** | 取决于实际使用的函数（tree-shaking 优化） |
| **构建时间** | 与单独安装子包相比增加约 0.1s |

## 与子包对比

| 场景 | 推荐方案 |
|------|---------|
| 快速原型开发 | `longmo-utils`（统一包） |
| 生产环境精确控制 | `@longmo-utils/*`（单独包） |
| 需要全部功能 | `longmo-utils`（统一包） |
| 仅浏览器功能 | `@longmo-utils/browser` |
| 仅通用功能 | `@longmo-utils/common` |

## 子包说明

### @longmo-utils/common

通用工具函数，不依赖任何平台特定的 API，可以在任何 JavaScript 环境中使用。

包含：数据转换、函数工具、字符串处理、数学计算、数组工具等。

### @longmo-utils/browser

浏览器专用工具函数，提供 DOM 操作、事件处理、存储管理、样式操作等功能。

包含：DOM 查询、类名操作、事件监听、Local Storage、剪贴板等。

### @longmo-utils/node

Node.js 专用工具函数，提供文件系统、路径处理、进程管理等 Node.js 特定功能。

包含：文件读写、目录操作、路径处理等。

## API 文档

详细 API 文档请查看：

- [Common API](/api/common/index.md)
- [Browser API](/api/browser/index.md)
- [Node API](/api/node/index.md)

## 许可证

MIT
