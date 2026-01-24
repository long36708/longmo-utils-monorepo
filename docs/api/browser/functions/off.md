[@longmo-utils/browser](../index.md) / off

# Function: off()

```ts
function off(
   element, 
   event, 
   handler, 
   useCapture): void;
```

事件解绑
移除元素上的事件监听器

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `element` | `Window` \| `Document` \| `HTMLElement` | `undefined` | 目标元素 |
| `event` | `string` | `undefined` | 事件名称 |
| `handler` | `EventListenerOrEventListenerObject` | `undefined` | 事件处理函数 |
| `useCapture` | `boolean` | `false` | 是否为捕获阶段的事件，必须与绑定时一致 |

## Returns

`void`

## Examples

```typescript
const handler = () => console.log('Clicked');
on(button, 'click', handler);
// ... 某些条件下
off(button, 'click', handler);
```

```typescript
// 在组件挂载时绑定
const resizeHandler = () => console.log('Window resized');
on(window, 'resize', resizeHandler);

// 在组件卸载时清理
function cleanup() {
  off(window, 'resize', resizeHandler);
}
```

```typescript
const handlers = {
  click: null as (() => void) | null,
  scroll: null as (() => void) | null
};

// 绑定
handlers.click = () => console.log('Clicked');
handlers.scroll = () => console.log('Scrolled');
on(button, 'click', handlers.click);
on(window, 'scroll', handlers.scroll);

// 清理
if (handlers.click) off(button, 'click', handlers.click);
if (handlers.scroll) off(window, 'scroll', handlers.scroll);
```

```typescript
const handler = () => console.log('Captured');
on(container, 'click', handler, true);
// 移除时必须也传入 true
off(container, 'click', handler, true);
```
