# VitePress + TypeDoc 自动 API 文档生成方案

## 概述

本方案使用 **VitePress** 作为文档站点框架，结合 **TypeDoc** 和 **typedoc-plugin-markdown** 插件实现自动化的 TypeScript API 文档生成。

## 技术栈

- **VitePress**: Vue 驱动的静态站点生成器，提供现代化的文档体验
- **TypeDoc**: TypeScript 文档生成器，从类型注释中提取文档
- **typedoc-plugin-markdown**: TypeDoc 插件，输出 Markdown 格式而非 HTML

## 目录结构

```
longmoo-utils-monorepo/
├── docs/                          # VitePress 文档目录
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.ts            # VitePress 配置文件
│   │   └── public/              # 静态资源
│   ├── index.md                 # 首页
│   ├── README.md                # 文档首页
│   ├── guide/                   # 使用指南
│   │   └── index.md             # 快速开始
│   └── api/                     # 自动生成的 API 文档
│       ├── common/              # Common 包 API
│       │   ├── index.md         # API 索引
│       │   └── modules/         # 模块文档（TypeDoc 生成）
│       ├── browser/             # Browser 包 API
│       │   ├── index.md
│       │   └── modules/
│       └── node/                # Node 包 API
│           ├── index.md
│           └── modules/
├── typedoc.common.json          # TypeDoc 配置 - Common 包
├── typedoc.browser.json         # TypeDoc 配置 - Browser 包
└── typedoc.node.json            # TypeDoc 配置 - Node 包
```

## 安装依赖

```bash
pnpm add -D vitepress typedoc typedoc-plugin-markdown
```

## 配置文件说明

### 1. TypeDoc 配置文件

每个包都有独立的 TypeDoc 配置文件：

#### `typedoc.common.json`
```json
{
  "$schema": "https://typedoc.org/schema.json",
  "entryPoints": ["packages/common/src/index.ts"],
  "out": "docs/api/common",
  "plugin": ["typedoc-plugin-markdown"],
  "hideInPageTOC": true,
  "hideBreadcrumbs": true,
  "hidePageHeader": true,
  "hideMembersSymbol": true,
  "disableSources": true,
  "readme": "none",
  "excludePrivate": true,
  "excludeProtected": true,
  "excludeInternal": true,
  "useCodeBlocks": true,
  "expandParameters": true
}
```

**关键配置说明**：
- `entryPoints`: TypeScript 源码入口文件
- `out`: 输出目录，对应 VitePress 的 API 文档目录
- `plugin`: 启用 typedoc-plugin-markdown 插件
- `hideInPageTOC/HideBreadcrumbs`: 隐藏 TypeDoc 自动生成的导航，让 VitePress 接管
- `excludePrivate/Protected/Internal`: 只导出公共 API
- `useCodeBlocks`: 使用代码块格式显示类型签名

### 2. VitePress 配置

#### `docs/.vitepress/config.ts`
```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Longmoo Utils',
  description: 'High-quality TypeScript utility library',

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/common/index.md' }
    ],

    sidebar: {
      '/api/common/': [
        {
          text: 'Common API',
          items: [
            { text: 'Index', link: '/api/common/index.md' },
            { text: 'Array', link: '/api/common/modules/array.md' },
            // ... 其他模块
          ]
        }
      ]
    }
  }
})
```

## 工作流程

### 自动生成 API 文档

TypeDoc 从 TypeScript 源码的 JSDoc 注释中提取文档信息：

```typescript
/**
 * Removes duplicate values from an array
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}
```

TypeDoc 会自动生成：
- 函数名称
- 类型签名 `unique<T>(arr: T[]): T[]`
- 泛型参数说明
- 参数说明
- 返回值说明
- JSDoc 注释内容

### 构建步骤

```bash
# 1. 构建所有包（生成类型定义）
pnpm build

# 2. 生成 API 文档（TypeDoc）
pnpm docs:api

# 3. 启动 VitePress 开发服务器
pnpm docs:dev

# 4. 构建静态文档站点
pnpm docs:build
```

## package.json 脚本

在根目录的 `package.json` 中添加以下脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs",
    "docs:api": "pnpm docs:api:common && pnpm docs:api:browser && pnpm docs:api:node",
    "docs:api:common": "typedoc --options typedoc.common.json",
    "docs:api:browser": "typedoc --options typedoc.browser.json",
    "docs:api:node": "typedoc --options typedoc.node.json",
    "docs": "pnpm docs:api && pnpm docs:build"
  }
}
```

## 最佳实践

### 1. 代码注释规范

使用 JSDoc 注释，TypeDoc 会自动提取：

```typescript
/**
 * Groups array elements by a key function
 *
 * @example
 * ```ts
 * const grouped = groupBy(
 *   [{ type: 'user' }, { type: 'admin' }],
 *   (item) => item.type
 * )
 * // => { user: [{ type: 'user' }], admin: [{ type: 'admin' }] }
 * ```
 *
 * @param arr - The array to group
 * @param keyFn - Function to extract grouping key
 * @returns Object with grouped arrays
 */
export function groupBy<T, K extends string | number>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]>
```

### 2. 模块组织

将相关函数组织到模块中：

```typescript
// packages/common/src/array/index.ts
/**
 * Array utilities
 */
export function unique<T>(arr: T[]): T[] { ... }
export function groupBy<T, K>(...): Record<K, T[]> { ... }

// packages/common/src/index.ts
export * from './array'
export * from './object'
export * from './function'
```

### 3. 类型导出

确保所有公共类型都被导出：

```typescript
export type { MyType, MyInterface } from './types'
```

### 4. 文档更新流程

1. 修改代码和注释
2. 运行 `pnpm docs:api` 重新生成 API 文档
3. 运行 `pnpm docs:dev` 预览
4. 确认无误后运行 `pnpm docs:build` 构建静态站点

## 优势

✅ **自动化**: 从代码注释自动生成，保持文档与代码同步
✅ **类型安全**: 完整的 TypeScript 类型信息
✅ **易于维护**: 代码即文档，单点维护
✅ **现代体验**: VitePress 提供快速、美观的文档站点
✅ **搜索友好**: 内置搜索功能
✅ **响应式**: 支持移动端访问
✅ **版本控制**: 文档随代码一起版本化

## 部署

可以将文档部署到：

- **GitHub Pages**: 自动通过 GitHub Actions 部署
- **Vercel/Netlify**: 通过 Git 集成自动部署
- **自定义服务器**: 使用 `pnpm docs:build` 生成的静态文件

### GitHub Actions 示例

```yaml
name: Deploy Documentation

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - uses: actions/setup-node@v3
        with:
          node-version: 22
          cache: 'pnpm'

      - run: pnpm install
      - run: pnpm docs

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/.vitepress/dist
```

## 进阶配置

### 1. 自定义主题

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 自定义逻辑
  }
}
```

### 2. 添加搜索

```typescript
themeConfig: {
  search: {
    provider: 'local'  // 或 'algolia'
  }
}
```

### 3. 多语言支持

创建 `docs/en/` 和 `docs/zh/` 目录，配置多语言。

## 故障排除

### TypeDoc 生成问题

```bash
# 查看详细日志
pnpm docs:api:common --logLevel Verbose
```

### VitePress 构建问题

```bash
# 清理缓存后重新构建
rm -rf docs/.vitepress/cache
pnpm docs:build
```

## 总结

本方案提供了一个完整的、自动化的 API 文档生成解决方案，将 TypeScript 源码自动转换为现代化的文档站点，确保文档始终与代码保持同步。

---

*最后更新: 2025-01-21*
