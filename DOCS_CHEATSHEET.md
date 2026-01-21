# 文档系统快速参考卡

## 🚀 快速启动

```bash
# 1. 安装依赖
pnpm install

# 2. 首次生成 API 文档
pnpm docs:api

# 3. 启动文档开发服务器
pnpm docs:dev
```

访问: http://localhost:5173

## 📋 常用命令

### 开发

| 命令 | 说明 |
|------|------|
| `pnpm docs:dev` | 启动开发服务器 |
| `pnpm docs:api` | 生成所有 API 文档 |

### 构建

| 命令 | 说明 |
|------|------|
| `pnpm docs` | 生成 API 文档并构建站点 |
| `pnpm docs:build` | 仅构建文档站点 |

### 预览

| 命令 | 说明 |
|------|------|
| `pnpm docs:preview` | 预览构建的文档 |

## 📁 关键文件

| 文件 | 用途 |
|------|------|
| `typedoc.common.json` | TypeDoc 配置 - Common |
| `typedoc.browser.json` | TypeDoc 配置 - Browser |
| `typedoc.node.json` | TypeDoc 配置 - Node |
| `docs/.vitepress/config.ts` | VitePress 配置 |
| `docs/.vitepress/theme/style.css` | 自定义样式 |

## 📝 JSDoc 模板

```typescript
/**
 * 函数简短描述
 *
 * @example
 * ```ts
 * const result = myFunction('arg')
 * ```
 *
 * @param paramName - 参数描述
 * @returns 返回值描述
 */
export function myFunction(paramName: string): ReturnType {
  // 实现
}
```

## 🔗 重要链接

| 文档 | 链接 |
|------|------|
| 快速开始 | `./DOCS_QUICKSTART.md` |
| 完整配置 | `./DOCS_SETUP.md` |
| 文档索引 | `./DOCUMENTATION.md` |
| 概览文档 | `./README_DOCS.md` |
| 完成总结 | `./DOCS_SUMMARY.md` |

## 🎯 工作流程

1. 修改源代码 + JSDoc 注释
2. `pnpm docs:api` - 重新生成 API 文档
3. `pnpm docs:dev` - 预览（如已启动则自动刷新）
4. 提交代码

## 🔧 故障排除

```bash
# TypeDoc 问题
pnpm build
pnpm docs:api:common --logLevel Verbose

# VitePress 问题
rm -rf docs/.vitepress/cache
pnpm docs:build
```

---

*最后更新: 2025-01-21*
