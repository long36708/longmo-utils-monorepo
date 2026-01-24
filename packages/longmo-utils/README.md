# longmo-utils

统一的工具库包，整合了 browser、common 和 node 三个子包的所有功能。

## 特性

- 📦 一次安装，获得所有工具函数
- 🌍 支持浏览器和 Node.js 环境
- ⚡ 完整的 TypeScript 类型支持
- 🌳 支持tree-shaking，只打包使用的代码

## 安装

```bash
pnpm install longmo-utils
```

## 使用

```typescript
// Common 工具（所有环境可用）
import { deepClone, debounce } from 'longmo-utils'

// 浏览器工具（需要 DOM/BOM API）
import { querySelector, addClass } from 'longmo-utils'

// Node.js 工具（需要 Node.js 环境）
import { readFile, writeFile } from 'longmo-utils'

// 或者直接导入所有
import * as utils from 'longmo-utils'
```

## 子包

- `@longmo-utils/common` - 通用工具函数（无平台依赖）
- `@longmo-utils/browser` - 浏览器专用工具（DOM/BOM）
- `@longmo-utils/node` - Node.js 专用工具（文件系统等）

## Tree-shaking

由于依赖了三个子包，打包工具（如 Vite、Webpack、Rollup）会自动进行 tree-shaking，只将你实际使用的代码打包进最终产物。

例如，如果你只使用了 `debounce` 函数，即使导入了整个包，最终产物也只会包含 `debounce` 的代码。

## 性能说明

- **安装体积**: 约 58KB（包含三个子包）
- **最终产物体积**: 取决于实际使用的函数（tree-shaking 优化）
- **构建时间**: 与单独安装子包相比增加约 0.1s

## 与子包对比

| 场景 | 推荐方案 |
|------|---------|
| 快速原型开发 | longmo-utils（统一包） |
| 生产环境精确控制 | @longmo-utils/*（单独包） |
| 需要全部功能 | longmo-utils（统一包） |
| 仅浏览器功能 | @longmo-utils/browser |
| 仅通用功能 | @longmo-utils/common |

## 许可证

MIT
