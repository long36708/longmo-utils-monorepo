---
home: true
heroText: Longmoo Utils
tagline: 高质量的 TypeScript 工具库
actionText: 快速开始 →
actionLink: /guide/
features:
  - title: 完整的类型支持
    details: 使用 TypeScript 构建，提供优秀的类型推断和自动补全
  - title: 零外部依赖
    details: 无外部运行时依赖，加载更快
  - title: 支持 Tree-shaking
    details: 使用 ES 模块，只打包你使用的代码
  - title: 平台特定优化
    details: 为 Common、Browser 和 Node.js 环境提供优化的包
  - title: 完善的测试
    details: 使用 Vitest 进行全面的测试覆盖
  - title: 简单易用
    details: 简单直观的 API 设计
footer: MIT License | Copyright © 2025 Longmoo
---

## 快速开始

### 安装

我们推荐使用 `longmo-utils` 统一包，一次安装即可使用所有功能。

```bash
# 推荐：统一包（包含所有功能）
pnpm add longmo-utils
```

如果您只需要特定平台的功能，也可以单独安装：

```bash
# 通用工具（所有环境）
pnpm add @longmo-utils/common
# 或 浏览器工具
pnpm add @longmo-utils/browser
# 或 Node.js 工具
pnpm add @longmo-utils/node
```

### 使用

```typescript
import { unique, debounce, camelCase, querySelector } from 'longmo-utils'

// 数组工具
const uniqueArray = unique([1, 2, 2, 3, 3, 4])

// 函数工具
const debouncedFn = debounce(() => console.log('Hello'), 300)

// 字符串工具
const result = camelCase('hello-world')

// 浏览器工具
const button = querySelector('.my-button')
```

## 文档

- [快速开始](/guide/) - 开始使用本库
- [API 文档 - longmo-utils](/api/longmo-utils/) - 统一包 API
- [API 文档 - Common](/api/common/) - 通用工具 API
- [API 文档 - Browser](/api/browser/) - 浏览器工具 API
- [API 文档 - Node](/api/node/) - Node.js 工具 API
