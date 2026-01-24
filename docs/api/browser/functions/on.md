[@longmo-utils/browser](../index.md) / on

# Function: on()

```ts
function on(
   element, 
   event, 
   handler, 
   useCapture): void;
```

事件绑定
在指定的元素上绑定事件监听器

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `element` | `Window` \| `Document` \| `HTMLElement` | `undefined` | 目标元素 |
| `event` | `string` | `undefined` | 事件名称（如 'click', 'mousedown' 等） |
| `handler` | `EventListenerOrEventListenerObject` | `undefined` | 事件处理函数 |
| `useCapture` | `boolean` | `false` | 是否在捕获阶段触发事件，默认为 false（冒泡阶段） |

## Returns

`void`

## Examples

```typescript
on(document.body, 'click', () => {
  console.log('Body clicked');
}, false);
```

```typescript
const button = $('button');
on(button, 'mouseenter', () => {
  addClass(button, 'hover');
});
on(button, 'mouseleave', () => {
  removeClass(button, 'hover');
});
```

```typescript
const input = $('input[type="text"]');
on(input, 'input', (e) => {
  console.log('Input value:', (e.target as HTMLInputElement).value);
});
```

```typescript
const handler = {
  count: 0,
  handleEvent(e: Event) {
    this.count++;
    console.log(`Event fired ${this.count} times`);
  }
};
on(button, 'click', handler);
```

```typescript
// 在父元素上使用捕获阶段拦截子元素事件
on(container, 'click', (e) => {
  console.log('Click captured at container');
}, true);
```
