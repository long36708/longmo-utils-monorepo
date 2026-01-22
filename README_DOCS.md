# VitePress + TypeDoc 自动 API 文档生成方案

> 使用 VitePress 和 TypeDoc 为 Longmoo Utils 构建现代化的自动 API 文档系统

## ✨ 特性

- 🚀 **自动化**: 从 TypeScript 源码自动生成 API 文档
- 🎨 **现代化**: 使用 VitePress 提供快速、美观的文档体验
- 📝 **类型安全**: 完整的 TypeScript 类型信息和 JSDoc 文档
- 🔍 **搜索友好**: 内置全文搜索功能
- 📱 **响应式**: 完美支持移动端和桌面端
- 🔄 **持续集成**: 支持 GitHub Actions 自动部署

## 📖 文档导航

| 文档 | 描述 |
|------|------|
| **[DOCUMENTATION.md](./DOCUMENTATION.md)** | 文档系统总览和索引 |
| **[DOCS_QUICKSTART.md](./DOCS_QUICKSTART.md)** | 快速开始指南（推荐） |
| **[DOCS_SETUP.md](./DOCS_SETUP.md)** | 完整配置方案文档 |
| **[在线文档](./docs/)** | 实际的文档站点 |

## 🎯 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
# 首次生成 API 文档
pnpm docs:api

# 启动文档开发服务器
pnpm docs:dev
```

访问 http://localhost:5173 查看文档。

### 3. 构建文档

```bash
# 生成完整的文档站点（包含 API 文档）
pnpm docs
```

构建产物位于 `docs/.vitepress/dist` 目录。

## 📁 项目结构

```
longmoo-utils-monorepo/
├── docs/                          # VitePress 文档目录
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.ts            # 主配置文件
│   │   └── theme/               # 自定义主题
│   ├── api/                     # API 文档（TypeDoc 生成）
│   │   ├── common/              # Common 包 API
│   │   ├── browser/             # Browser 包 API
│   │   └── node/                # Node 包 API
│   ├── guide/                   # 使用指南
│   ├── index.md                 # 首页
│   └── README.md
├── typedoc.common.js            # TypeDoc 配置 - Common
├── typedoc.browser.js           # TypeDoc 配置 - Browser
├── typedoc.node.js              # TypeDoc 配置 - Node
├── .github/workflows/           # GitHub Actions 工作流
│   └── docs.yml                 # 自动部署配置
├── DOCUMENTATION.md             # 文档系统总览
├── DOCS_QUICKSTART.md           # 快速开始指南
└── DOCS_SETUP.md                # 完整配置文档
```

## 🛠️ 可用命令

### 文档相关

| 命令 | 说明 |
|------|------|
| `pnpm docs:dev` | 启动文档开发服务器 |
| `pnpm docs:build` | 构建文档站点 |
| `pnpm docs:preview` | 预览构建的文档 |
| `pnpm docs:api` | 生成所有包的 API 文档 |
| `pnpm docs` | 生成 API 文档并构建站点 |

### API 文档生成

| 命令 | 说明 |
|------|------|
| `pnpm docs:api:common` | 生成 Common 包的 API 文档 |
| `pnpm docs:api:browser` | 生成 Browser 包的 API 文档 |
| `pnpm docs:api:node` | 生成 Node 包的 API 文档 |

## 💡 使用示例

### 编写代码文档

TypeDoc 会自动从 JSDoc 注释中提取文档：

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

### 重新生成文档

```bash
# 修改代码后重新生成 API 文档
pnpm docs:api
```

## 🚀 自动部署

使用 GitHub Actions 自动部署到 GitHub Pages：

1. 将 `.github/workflows/docs.yml` 添加到仓库
2. 在仓库设置中启用 GitHub Pages
3. 推送到 main 分支，自动触发部署

## 📊 文档架构

```
TypeScript 源码
    ↓
TypeDoc (typedoc-plugin-markdown)
    ↓
Markdown API 文档
    ↓
VitePress
    ↓
静态 HTML 文档站点
```

## 🎨 自定义

### 修改样式

编辑 `docs/.vitepress/theme/style.css`

### 修改配置

编辑 `docs/.vitepress/config.ts`

### 添加自定义页面

在 `docs/` 目录创建新的 `.md` 文件

## 📚 包文档

### @longmo-utils/common

[查看 API 文档](./docs/api/common/)

通用工具函数，不依赖任何平台特性。

- Array - 数组操作
- Object - 对象操作
- Function - 函数操作
- String - 字符串操作

### @longmo-utils/browser

[查看 API 文档](./docs/api/browser/)

浏览器专用工具函数，依赖 DOM/BOM API。

- DOM - DOM 操作
- Storage - LocalStorage/SessionStorage
- Network - HTTP 请求

### @longmo-utils/node

[查看 API 文档](./docs/api/node/)

Node.js 专用工具函数，依赖 Node.js API。

- FS - 文件系统操作
- Env - 环境变量
- Process - 进程管理

## 🔗 相关链接

- [VitePress 官方文档](https://vitepress.dev/)
- [TypeDoc 官方文档](https://typedoc.org/)
- [typedoc-plugin-markdown 文档](https://typedoc-plugin-markdown.org/)
- [JSDoc 官方文档](https://jsdoc.app/)

## 📝 贡献

欢迎贡献！请确保：

1. 代码包含完整的 JSDoc 注释
2. 遵循项目的代码规范
3. 更新相关文档

## 📄 许可证

MIT License

---

*最后更新: 2025-01-21*
