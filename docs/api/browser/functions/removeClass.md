[@longmo-utils/browser](../index.md) / removeClass

# Function: removeClass()

```ts
function removeClass(element, ...classNames): void;
```

从元素中移除一个或多个 CSS 类

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | 要移除类的 DOM 元素 |
| ...`classNames` | `string`[] | 一个或多个要移除的类名 |

## Returns

`void`

## Examples

```typescript
const button = $('button');
removeClass(button, 'active');
removeClass(button, 'highlight', 'primary');
```

```typescript
const modal = $('.modal');
if (modal) {
  removeClass(modal, 'open', 'visible');
  addClass(modal, 'closed');
}
```

```typescript
const menu = $('.menu');
if (menu) {
  if (menu.classList.contains('active')) {
    removeClass(menu, 'active');
  }
}
```

```typescript
const container = $('.container');
if (container) {
  // 移除所有工具类
  removeClass(container, 'mt-2', 'mb-4', 'p-4', 'bg-gray-100');
  // 保留基础类
  addClass(container, 'base-style');
}
```
