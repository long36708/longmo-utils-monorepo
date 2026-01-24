[@longmo-utils/browser](../index.md) / once

# Function: once()

```ts
function once(
   element, 
   event, 
   handler, 
   useCapture): void;
```

一次性事件监听
绑定一个只触发一次的事件监听器，触发后自动移除

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `element` | `Window` \| `Document` \| `HTMLElement` | `undefined` | 目标元素 |
| `event` | `string` | `undefined` | 事件名称 |
| `handler` | `EventListenerOrEventListenerObject` | `undefined` | 事件处理函数 |
| `useCapture` | `boolean` | `false` | 是否在捕获阶段触发事件，默认为 false |

## Returns

`void`

## Examples

```typescript
once(button, 'click', () => {
  console.log('This will only log once');
});
```

```typescript
once(document, 'DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  // 执行初始化逻辑
});
```

```typescript
once(window, 'scroll', () => {
  console.log('User scrolled for the first time');
  // 显示提示或记录数据
});
```

```typescript
once(form, 'submit', (e) => {
  e.preventDefault();
  console.log('First form submission');
  // 特殊处理首次提交
});
```

```typescript
const image = new Image();
once(image, 'load', () => {
  console.log('Image loaded successfully');
  // 显示图片或触发其他逻辑
});
image.src = 'path/to/image.jpg';
```

```typescript
const counter = { clicks: 0 };
once(button, 'click', (e) => {
  counter.clicks++;
  console.log(`Clicked at: ${e.timeStamp}`);
});
```
