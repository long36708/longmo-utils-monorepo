# TypeDoc 最佳实践规范

本文档提供了编写符合 TypeDoc 规范的代码注释的完整指南，确保生成的 API 文档清晰、完整且易于理解。

## 📋 目录

- [简介](#简介)
- [基本注释结构](#基本注释结构)
- [标签详解](#标签详解)
- [最佳实践清单](#最佳实践清单)
- [完整示例](#完整示例)
- [常见错误](#常见错误)
- [与项目集成](#与项目集成)

## 简介

TypeDoc 是 TypeScript 的文档生成工具，它从 JSDoc 注释中提取信息并生成结构化的 API 文档。

良好的注释不仅能生成清晰的文档，还能提升代码的可读性和可维护性。

### 为什么需要规范注释？

- ✅ **自动生成文档** - TypeDoc 自动提取注释生成完整 API 文档
- ✅ **提升代码质量** - 详细的注释帮助其他开发者理解代码
- ✅ **IDE 支持** - 现代 IDE 能显示悬停提示和自动补全
- ✅ **类型安全** - TypeScript 类型信息自动集成到文档中

## 基本注释结构

一个标准的 TypeDoc 注释包含以下部分：

```typescript
/**
 * 简短描述（一行）
 *
 * 详细描述（可选），可以包含多行文本。
 * 详细描述可以解释函数的工作原理、使用场景等。
 *
 * @example
 *```ts
 * const result = myFunction('arg');
 * ```
 *
 * @param paramName - 参数的详细描述
 * @returns 返回值的详细描述
 *
 * @since 1.0.0
 */
```

### 注释结构说明

| 部分 | 说明 | 必需性 |
|------|------|--------|
| 简短描述 | 一句话概括功能，通常以动词开头 | ✅ 必需 |
| 详细描述 | 详细说明功能、使用场景、注意事项 | ⚠️ 推荐 |
| `@example` | 提供代码使用示例 | ⚠️ 推荐 |
| `@param` | 说明每个参数的类型和用途 | ✅ 必需 |
| `@returns` | 说明返回值的类型和含义 | ✅ 必需 |

## 标签详解

### @param - 参数说明

描述函数的参数，包括参数名、类型和详细说明。

#### 基本语法

```typescript
/**
 * @param paramName - 参数描述
 */
```

#### 类型信息

```typescript
/**
 * @param {string} name - 用户名称
 * @param {number} age - 用户年龄（必须大于 0）
 * @param {boolean} isActive - 是否激活状态
 */
```

#### 可选参数

```typescript
/**
 * @param options - 配置选项
 * @param options.timeout - 超时时间（毫秒），默认 5000
 * @param options.retry - 重试次数，默认 3
 */
function fetchData(options?: { timeout?: number; retry?: number }) {}
```

#### 泛型参数

```typescript
/**
 * @param array - 输入数组
 * @param predicate - 过滤条件函数
 * @returns 过滤后的数组
 * @template T
 */
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {}
```

### @returns - 返回值说明

描述函数的返回值类型、含义以及特殊情况。

#### 基本语法

```typescript
/**
 * @returns 返回值的描述
 */
```

#### 详细说明

```typescript
/**
 * @returns {HTMLElement | null} 匹配的 DOM 元素，未找到时返回 null
 * @returns {Promise<string>} 异步返回处理后的字符串
 * @returns {number} 计算结果，始终为正整数
 */
```

#### 特殊情况

```typescript
/**
 * @returns {string | undefined} 成功时返回结果，失败时返回 undefined
 * @returns {never} 函数永不返回（总是抛出异常）
 */
```

### @example - 使用示例

提供实际的代码示例，帮助开发者理解如何使用该函数。

#### 基本示例

```typescript
/**
 * @example
 * ```ts
 * const result = add(1, 2)
 * console.log(result) // 输出: 3
 * ```
 */
```

#### 多个示例

```typescript
/**
 * @example 基本用法
 * ```ts
 * const div = createElement('div')
 * ```
 *
 * @example 带属性
 * ```ts
 * const button = createElement('button', { id: 'submit' })
 * ```
 *
 * @example 完整用法
 * ```ts
 * const card = createElement('div', { class: 'card' }, [
 *   createElement('h3', {}, ['Title'])
 * ])
 * ```
 */
```

### @throws - 异常说明

说明函数可能抛出的异常及其触发条件。

```typescript
/**
 * @throws {RangeError} 当 index 为负数时抛出
 * @throws {TypeError} 当参数类型不正确时抛出
 * @throws {Error} 当网络请求失败时抛出
 */
function processData(index: number, data: unknown) {}
```

### @see - 相关链接

提供相关的文档链接、函数引用等。

```typescript
/**
 * @see {@link add} 加法函数
 * @see [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * @see ../other-module#someFunction 相关函数
 */
```

### @since - 版本信息

标记函数首次引入的版本。

```typescript
/**
 * @since 1.0.0
 * @since 2.1.0 新增 options 参数
 */
```

### @deprecated - 废弃标记

标记已废弃的函数，并提供替代方案。

```typescript
/**
 * @deprecated 使用 {@link newFunction} 代替
 * @since 2.0.0
 */
function oldFunction() {}
```

### @category - 分类

将函数归类到特定类别。

```typescript
/**
 * @category DOM 操作
 */
```

### @internal - 内部标记

标记内部使用的 API，不会出现在公开文档中。

```typescript
/**
 * @internal
 */
function internalHelper() {}
```

## 最佳实践清单

### ✅ 必须遵循

1. **每个公开函数必须有注释**
   ```typescript
   // ✅ 好的做法
   /**
    * 计算两个数的和
    * @param a - 第一个数
    * @param b - 第二个数
    * @returns 两数之和
    */
   function add(a: number, b: number): number {}

   // ❌ 差的做法 - 缺少注释
   function add(a: number, b: number): number {}
   ```

2. **使用简洁的简短描述**
   ```typescript
   // ✅ 好的做法 - 使用动词开头
   /**
    * 添加一个类到元素
    */

   // ❌ 差的做法 - 太啰嗦或不符合规范
   /**
    * 这个函数是用来添加一个类到元素上面的
    */
   ```

3. **每个参数都需要 @param 标签**
   ```typescript
   // ✅ 好的做法
   /**
    * @param selector - CSS 选择器字符串
    * @param context - 可选的上下文元素
    */

   // ❌ 差的做法 - 缺少参数说明
   /**
    * 查找元素
    */
   ```

4. **每个函数都需要 @returns 标签**
   ```typescript
   // ✅ 好的做法
   /**
    * @returns {HTMLElement | null} 匹配的元素，未找到返回 null
    */

   // ❌ 差的做法 - 缺少返回值说明
   ```

5. **提供实用的 @example**
   ```typescript
   // ✅ 好的做法 - 完整的示例
   /**
    * @example
    * ```ts
    * const header = $('header')
    * const activeItem = $('.menu-item.active')
    * ```
    */

   // ❌ 差的做法 - 示例不完整或缺少上下文
   /**
    * @example
    * $('header')
    * ```
   ```

### ⚠️ 推荐遵循

1. **为复杂函数提供详细描述**
   ```typescript
   /**
    * 深度合并多个对象。
    *
    * 此函数会递归地合并对象的所有属性，处理嵌套对象和数组。
    * 合并规则：
    * - 基本类型：后面的值覆盖前面的值
    * - 对象：递归合并
    * - 数组：后面的数组替换前面的数组
    *
    * @param objects - 要合并的对象
    * @returns 合并后的新对象
    */
   ```

2. **使用代码块标记语言**
   ```typescript
   /**
    * @example
    * ```ts  // ✅ 指定语言
    * const result = add(1, 2)
    * ```
    */
   ```

3. **描述参数的限制和要求**
   ```typescript
   /**
    * @param index - 数组索引（必须 >= 0 且 < array.length）
    * @param value - 必须是非空字符串
    */
   ```

4. **为异步函数说明返回类型**
   ```typescript
   /**
    * @returns {Promise<string>} 异步返回处理后的字符串
    */
   async function fetchData(): Promise<string> {}
   ```

5. **标记函数的变更**
   ```typescript
   /**
    * @since 1.0.0
    * @version 2.0.0 新增 options 参数
    */
   ```

### ❌ 避免的做法

1. **避免过于简略的注释**
   ```typescript
   // ❌ 差的做法 - 信息太少
   /**
    * 计算
    */

   // ✅ 好的做法 - 清晰说明
   /**
    * 计算数组元素的总和
    */
   ```

2. **避免复制粘贴相同的注释**
   ```typescript
   // ❌ 差的做法 - 每个函数注释都一样
   /**
    * 处理数据
    */

   // ✅ 好的做法 - 针对每个函数具体描述
   /**
    * 解析 JSON 字符串
    */
   /**
    * 序列化对象为 JSON 字符串
    */
   ```

3. **避免在注释中写实现细节**
   ```typescript
   // ❌ 差的做法 - 描述实现而非功能
   /**
    * 使用 split 方法分割字符串，然后用 filter 过滤
    */

   // ✅ 好的做法 - 描述功能和用途
   /**
    * 过滤字符串中的空字符
    */
   ```

4. **避免使用过时的 JSDoc 标签**
   ```typescript
   // ❌ 差的做法 - 使用过时标签
   /**
    * @abstract
    * @class
    * @public
    */

   // ✅ 好的做法 - 使用 TypeScript 类型系统
   abstract class MyClass {}
   ```

5. **避免不准确的描述**
   ```typescript
   // ❌ 差的做法 - 描述与实际不符
   /**
    * @returns {string} 总是返回字符串
    */
   function getData(): string | null {}

   // ✅ 好的做法 - 准确描述
   /**
    * @returns {string | null} 成功返回字符串，失败返回 null
    */
   ```

## 完整示例

### 简单函数示例

```typescript
/**
 * 计算两个数的和。
 *
 * @param a - 第一个加数
 * @param b - 第二个加数
 * @returns 两数之和
 *
 * @example
 * ```ts
 * const result = add(1, 2)
 * console.log(result) // 输出: 3
 * ```
 */
export function add(a: number, b: number): number {
  return a + b
}
```

### 复杂函数示例

```typescript
/**
 * 获取 DOM 元素。
 *
 * 使用 CSS 选择器查询 DOM，返回第一个匹配的元素。
 * 如果未找到匹配的元素，返回 null。
 *
 * @param selector - CSS 选择器字符串（支持 .class、#id、div > p 等语法）
 * @returns 匹配的 DOM 元素，未找到时返回 null
 *
 * @example 基本用法
 * ```ts
 * const header = $('header')
 * const activeItem = $('.menu-item.active')
 * ```
 *
 * @example 组合选择器
 * ```ts
 * const links = $('nav a')
 * const inputs = $('form input[type="text"]')
 * ```
 *
 * @since 1.0.0
 */
export function $(selector: string): HTMLElement | null {
  return document.querySelector(selector)
}
```

### 带选项参数的函数示例

```typescript
/**
 * 创建 DOM 元素并设置属性和子元素。
 *
 * @param tag - HTML 标签名（如 'div'、'span'、'a'）
 * @param attributes - 可选的属性键值对对象
 * @param children - 可选的子元素数组，可以是字符串或 DOM 节点
 * @returns 创建的 DOM 元素
 *
 * @example 创建简单元素
 * ```ts
 * const div = createElement('div')
 * ```
 *
 * @example 带属性
 * ```ts
 * const button = createElement('button', {
 *   id: 'submit',
 *   type: 'submit',
 *   class: 'btn-primary'
 * })
 * ```
 *
 * @example 带属性和子元素
 * ```ts
 * const card = createElement('div', { class: 'card' }, [
 *   createElement('h3', {}, ['Card Title']),
 *   createElement('p', {}, ['Card description text']),
 *   createElement('button', { class: 'close' }, ['×'])
 * ])
 * ```
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes?: Record<string, string>,
  children?: (string | Node)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag)

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value)
    }
  }

  if (children) {
    for (const child of children) {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child))
      } else {
        element.appendChild(child)
      }
    }
  }

  return element
}
```

### 异步函数示例

```typescript
/**
 * 获取远程数据。
 *
 * 发起 HTTP GET 请求获取数据，支持自定义请求配置。
 * 请求失败时会自动重试指定次数。
 *
 * @param url - 请求的 URL 地址
 * @param options - 请求配置选项
 * @param options.timeout - 请求超时时间（毫秒），默认 5000
 * @param options.retry - 失败重试次数，默认 3
 * @returns Promise，解析为响应 JSON 数据
 * @throws {TypeError} 当 URL 格式不正确时抛出
 * @throws {Error} 当所有重试都失败后抛出
 *
 * @example 基本用法
 * ```ts
 * const data = await fetchData('https://api.example.com/users')
 * ```
 *
 * @example 自定义配置
 * ```ts
 * const data = await fetchData('https://api.example.com/users', {
 *   timeout: 10000,
 *   retry: 5
 * })
 * ```
 *
 * @since 1.2.0
 */
export async function fetchData(
  url: string,
  options?: { timeout?: number; retry?: number }
): Promise<unknown> {
  // 实现代码...
  throw new Error('Not implemented')
}
```

### 类和类方法示例

```typescript
/**
 * 事件发射器类。
 *
 * 提供观察者模式的实现，支持事件订阅和触发。
 *
 * @example
 * ```ts
 * const emitter = new EventEmitter()
 * emitter.on('click', (event) => {
 *   console.log('Clicked:', event)
 * })
 * emitter.emit('click', { x: 100, y: 200 })
 * ```
 *
 * @since 2.0.0
 */
export class EventEmitter {
  private listeners: Map<string, Function[]> = new Map()

  /**
   * 订阅事件。
   *
   * @param event - 事件名称
   * @param handler - 事件处理函数
   * @returns 取消订阅的函数
   *
   * @example
   * ```ts
   * const unsubscribe = emitter.on('data', (data) => {
   *   console.log(data)
   * })
   *
   * // 取消订阅
   * unsubscribe()
   * ```
   */
  on(event: string, handler: Function): () => void {
    const handlers = this.listeners.get(event) ?? []
    handlers.push(handler)
    this.listeners.set(event, handlers)

    return () => this.off(event, handler)
  }

  /**
   * 取消订阅事件。
   *
   * @param event - 事件名称
   * @param handler - 要移除的事件处理函数
   */
  off(event: string, handler: Function): void {
    const handlers = this.listeners.get(event)
    if (handlers) {
      const index = handlers.indexOf(handler)
      if (index !== -1) {
        handlers.splice(index, 1)
      }
    }
  }

  /**
   * 触发事件。
   *
   * 调用所有订阅了该事件的处理器。
   *
   * @param event - 事件名称
   * @param data - 传递给处理器的事件数据
   */
  emit(event: string, data?: unknown): void {
    const handlers = this.listeners.get(event)
    if (handlers) {
      handlers.forEach(handler => handler(data))
    }
  }
}
```

## 常见错误

### 错误 1：缺少参数说明

```typescript
// ❌ 错误
/**
 * 查找元素
 */
function findElement(selector: string, context?: Element) {}

// ✅ 正确
/**
 * 查找 DOM 元素。
 *
 * @param selector - CSS 选择器字符串
 * @param context - 可选的上下文元素，默认为 document
 */
function findElement(selector: string, context?: Element) {}
```

### 错误 2：返回值描述不准确

```typescript
// ❌ 错误
/**
 * @returns {string} 元素的内容
 */
function getContent(element: HTMLElement): string | null {}

// ✅ 正确
/**
 * @returns {string | null} 元素的文本内容，元素不存在时返回 null
 */
function getContent(element: HTMLElement): string | null {}
```

### 错误 3：示例代码不完整

```typescript
// ❌ 错误
/**
 * @example
 * $('header')
 */

// ✅ 正确
/**
 * @example
 * ```ts
 * const header = $('header')
 * if (header) {
 *   console.log(header.textContent)
 * }
 * ```
 */
```

### 错误 4：使用过时的标签

```typescript
// ❌ 错误
/**
 * @class
 * @constructor
 */
class MyClass {}

// ✅ 正确
/**
 * 我的类描述。
 */
class MyClass {}
```

### 错误 5：描述实现而非功能

```typescript
// ❌ 错误
/**
 * 使用 classList.add 添加类名
 */
function addClass(element: HTMLElement, className: string) {}

// ✅ 正确
/**
 * 添加一个或多个 CSS 类到指定元素。
 *
 * @param element - 目标 DOM 元素
 * @param classNames - 要添加的类名
 */
function addClass(element: HTMLElement, ...classNames: string) {}
```

### 错误 6：缺少类型信息

```typescript
// ❌ 错误
/**
 * @param options - 配置
 */
function configure(options: any) {}

// ✅ 正确
/**
 * @param options - 配置选项
 * @param options.timeout - 超时时间（毫秒）
 * @param options.debug - 是否启用调试模式
 */
function configure(options: { timeout?: number; debug?: boolean }) {}
```

## 与项目集成

### 在 Longmoo Utils 项目中使用

本项目使用 TypeDoc + VitePress 生成文档，遵循以下规范：

#### 1. 文件位置

API 文档自动生成到以下位置：
- `docs/api/common/` - common 包的 API 文档
- `docs/api/browser/` - browser 包的 API 文档
- `docs/api/node/` - node 包的 API 文档

#### 2. 配置文件

TypeDoc 配置文件：
- `typedoc.common.js` - 通用工具包配置
- `typedoc.browser.js` - 浏览器工具包配置
- `typedoc.node.js` - Node.js 工具包配置

#### 3. 生成文档

```bash
# 生成所有 API 文档
pnpm docs:api

# 生成特定包的文档
pnpm docs:api:common
pnpm docs:api:browser
pnpm docs:api:node

# 启动文档开发服务器
pnpm docs:dev

# 构建完整文档站点
pnpm docs
```

#### 4. 自动化部署

文档通过 GitHub Actions 自动部署，提交代码后自动更新 API 文档。

### 注释模板

复制以下模板作为新函数的注释起点：

```typescript
/**
 * 函数简短描述（使用动词开头）
 *
 * 详细描述（可选），说明功能、使用场景、注意事项。
 *
 * @param paramName - 参数描述，说明类型、限制、默认值
 * @returns 返回值描述，说明类型、含义、特殊情况
 *
 * @example
 * ```ts
 * const result = functionName('arg')
 * ```
 *
 * @since 1.0.0
 */
export function functionName(paramName: string): ReturnType {
  // 实现
}
```

### 代码审查清单

在提交代码前，检查以下项目：

- [ ] 所有公开函数都有注释
- [ ] 每个参数都有 `@param` 标签
- [ ] 每个函数都有 `@returns` 标签
- [ ] 每个函数都有至少三个 `@example`，覆盖不同场景
- [ ] 简短描述简洁清晰（动词开头）
- [ ] 描述准确，没有过时信息
- [ ] 复杂函数有详细描述
- [ ] 异常函数有 `@throws` 说明
- [ ] 已废弃函数有 `@deprecated` 标记

## 参考资源

- [TypeDoc 官方文档](https://typedoc.org/)
- [JSDoc 官方文档](https://jsdoc.app/)
- [TypeScript Handbook - JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- [typedoc-plugin-markdown 文档](https://typedoc-plugin-markdown.org/)

---

*最后更新: 2026-01-24*
