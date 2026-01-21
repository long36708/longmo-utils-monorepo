# TypeDoc 配置文件参数修正说明

## 问题描述

TypeDoc 不使用 `--config` 参数，而是使用 `--options` 参数来指定配置文件。

## 修正内容

### package.json 脚本修正

**修正前**：
```json
"docs:api:common": "typedoc --config typedoc.common.json",
"docs:api:browser": "typedoc --config typedoc.browser.json",
"docs:api:node": "typedoc --config typedoc.node.json"
```

**修正后**：
```json
"docs:api:common": "typedoc --options typedoc.common.json",
"docs:api:browser": "typedoc --options typedoc.browser.json",
"docs:api:node": "typedoc --options typedoc.node.json"
```

## 正确的命令

### 单独生成某个包的 API 文档

```bash
# Common 包
typedoc --options typedoc.common.json

# Browser 包
typedoc --options typedoc.browser.json

# Node 包
typedoc --options typedoc.node.json
```

### 生成所有 API 文档

```bash
pnpm docs:api
```

### 查看详细日志

```bash
# 查看详细日志用于调试
typedoc --options typedoc.common.json --logLevel Verbose
```

## TypeDoc 常用参数

| 参数 | 说明 |
|------|------|
| `--options <file>` | 指定配置文件 |
| `--entryPoints <path>` | 指定入口文件 |
| `--out <dir>` | 指定输出目录 |
| `--logLevel <level>` | 日志级别 (Verbose, Info, Warn, Error) |
| `--help` | 显示帮助信息 |

## 验证

运行以下命令验证修正是否成功：

```bash
# 测试 Common 包文档生成
pnpm docs:api:common

# 如果成功，会在 docs/api/common/ 目录生成 Markdown 文件
```

## 相关文档

- [TypeDoc 官方文档](https://typedoc.org/options/)
- [typedoc-plugin-markdown 文档](https://typedoc-plugin-markdown.org/)

---

*修正日期: 2025-01-21*
