[@longmo-utils/browser](../index.md) / setStyle

# Function: setStyle()

```ts
function setStyle(element, styles): void;
```

为元素设置多个 CSS 属性

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | 要应用样式的 DOM 元素 |
| `styles` | `Record`\<`string`, `string`\> | CSS 属性键值对对象 |

## Returns

`void`

## Examples

```typescript
const header = $('header');
setStyle(header, {
  'color': '#333',
  'font-size': '16px',
  'background-color': '#f5f5f5'
});
```

```typescript
const modal = $('.modal');
if (modal) {
  setStyle(modal, {
    'opacity': '0',
    'transform': 'translateY(-20px)',
    'transition': 'opacity 0.3s ease, transform 0.3s ease'
  });

  setTimeout(() => {
    setStyle(modal, {
      'opacity': '1',
      'transform': 'translateY(0)'
    });
  }, 100);
}
```

```typescript
const card = $('.card');
if (card) {
  const isDark = document.documentElement.classList.contains('dark');
  setStyle(card, {
    'background-color': isDark ? '#1f2937' : '#ffffff',
    'color': isDark ? '#f9fafb' : '#111827',
    'box-shadow': isDark ? '0 4px 6px rgba(0, 0, 0, 0.5)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
  });
}
```

```typescript
const tooltip = $('.tooltip');
const trigger = $('.trigger');

if (tooltip && trigger) {
  const triggerRect = trigger.getBoundingClientRect();
  setStyle(tooltip, {
    'position': 'absolute',
    'top': `${triggerRect.bottom + 10}px`,
    'left': `${triggerRect.left}px`,
    'z-index': '1000'
  });
}
```
