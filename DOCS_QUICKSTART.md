# 文档生成快速开始指南

本文档将帮助你快速设置和使用 Longmoo Utils 的自动 API 文档生成系统。

## 前置要求

- Node.js >= 22
- pnpm >= 10

## 安装

### 1. 克隆仓库

```bash
git clone <repository-url>
cd longmoo-utils-monorepo
```

### 2. 安装依赖

```bash
pnpm install
```

## 开发模式

### 启动文档开发服务器

```bash
# 首次启动需要先生成 API 文档
pnpm docs:api

# 启动开发服务器
pnpm docs:dev
```

访问 http://localhost:5173 查看文档。

### 自动重新生成 API 文档

当你修改源代码时，需要重新生成 API 文档：

```bash
# 在另一个终端运行
pnpm docs:api
```

## 构建

### 构建所有包

```bash
pnpm build
```

### 生成 API 文档

```bash
# 生成所有包的 API 文档
pnpm docs:api

# 或单独生成某个包的 API 文档
pnpm docs:api:common
pnpm docs:api:browser
pnpm docs:api:node
```

### 构建文档站点

```bash
# 生成完整的文档站点（包含 API 文档）
pnpm docs
```

构建产物位于 `docs/.vitepress/dist` 目录。

## 预览构建结果

```bash
pnpm docs:preview
```

## 部署

### GitHub Pages 自动部署

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 将 `.github/workflows/docs.yml` 添加到仓库
3. 推送到 main 分支，自动触发部署

### 手动部署

```bash
# 构建文档
pnpm docs

# 将 docs/.vitepress/dist 部署到你的静态服务器
```

## 工作流程

### 日常开发

```bash
# 1. 修改源代码
# 2. 重新生成 API 文档
pnpm docs:api

# 3. 预览更改（开发服务器会自动刷新）
# (如果已经在运行 pnpm docs:dev)

# 4. 提交代码
git add .
git commit -m "feat: add new utility function"
git push
```

### 发布新版本

```bash
# 1. 更新版本号
# 2. 构建所有包
pnpm build

# 3. 生成并构建文档
pnpm docs

# 4. 提交并推送
git add .
git commit -m "chore: release v1.0.0"
git push
```

## 目录结构

```
longmoo-utils-monorepo/
├── docs/                          # 文档根目录
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.ts            # 主配置文件
│   │   └── theme/               # 自定义主题
│   ├── api/                     # API 文档（自动生成）
│   │   ├── common/              # Common 包 API
│   │   ├── browser/             # Browser 包 API
│   │   └── node/                # Node 包 API
│   ├── guide/                   # 用户指南
│   ├── index.md                 # 首页
│   └── README.md
├── typedoc.common.js            # TypeDoc 配置 - Common
├── typedoc.browser.js           # TypeDoc 配置 - Browser
├── typedoc.node.js              # TypeDoc 配置 - Node
└── package.json                  # 包含文档构建脚本
```

## 可用脚本

| 脚本 | 说明 |
|------|------|
| `pnpm docs:dev` | 启动文档开发服务器 |
| `pnpm docs:build` | 构建文档站点 |
| `pnpm docs:preview` | 预览构建的文档 |
| `pnpm docs:api` | 生成所有包的 API 文档 |
| `pnpm docs:api:common` | 生成 Common 包的 API 文档 |
| `pnpm docs:api:browser` | 生成 Browser 包的 API 文档 |
| `pnpm docs:api:node` | 生成 Node 包的 API 文档 |
| `pnpm docs` | 生成 API 文档并构建站点 |

## 常见问题

### Q: 如何添加新的 API 文档？

A: 无需手动添加。TypeDoc 会自动从源代码的 JSDoc 注释中提取文档信息。只需确保你的函数有正确的注释：

```typescript
/**
 * 函数简短描述
 *
 * 详细描述（可选）
 *
 * @param paramName - 参数描述
 * @returns 返回值描述
 */
export function myFunction(paramName: string): string {
  // 实现
}
```

### Q: API 文档样式不符合预期？

A: 可以通过修改 `docs/.vitepress/theme/style.css` 来自定义样式。

### Q: 如何添加自定义页面？

A: 在 `docs/` 目录下创建新的 `.md` 文件，然后在 `docs/.vitepress/config.ts` 中配置导航。

### Q: TypeDoc 生成失败？

A: 确保已经构建了所有包：

```bash
pnpm build
pnpm docs:api
```

### Q: 如何在本地测试 GitHub Actions 工作流？

A: 使用 act 工具或手动执行命令：

```bash
pnpm install
pnpm build
pnpm docs
```

## 下一步

- 阅读详细的[配置文档](./DOCS_SETUP.md)
- 查看 [VitePress 官方文档](https://vitepress.dev/)
- 查看 [TypeDoc 官方文档](https://typedoc.org/)
- 查看 [typedoc-plugin-markdown 文档](https://typedoc-plugin-markdown.org/)

## 获取帮助

如有问题，请：
1. 查看项目 Issues
2. 提交新的 Issue
3. 参考官方文档

---

*最后更新: 2025-01-21*
