[@longmo-utils/browser](../index.md) / toggleClass

# Function: toggleClass()

```ts
function toggleClass(element, className): boolean;
```

切换元素的 CSS 类(存在则移除,不存在则添加)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | 要切换类的 DOM 元素 |
| `className` | `string` | 要切换的类名 |

## Returns

`boolean`

如果类被添加则返回 true,如果被移除则返回 false

## Examples

```typescript
const button = $('button');
const isActive = toggleClass(button, 'active');
console.log('Active:', isActive); // 添加时为 true,移除时为 false
```

```typescript
const menuToggle = $('#menu-toggle');
const menu = $('#menu');

menuToggle?.addEventListener('click', () => {
  if (menu) {
    const isOpen = toggleClass(menu, 'open');
    if (isOpen) {
      addClass(menuToggle, 'active');
    } else {
      removeClass(menuToggle, 'active');
    }
  }
});
```

```typescript
const emailInput = $('input[type="email"]');

emailInput?.addEventListener('input', () => {
  const isValid = emailInput.value.includes('@');
  toggleClass(emailInput, 'valid', isValid);
  toggleClass(emailInput, 'invalid', !isValid);
});
```

```typescript
const buttons = $$('.tab-button');
const panels = $$('.tab-panel');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 切换按钮的激活状态
    buttons.forEach(btn => removeClass(btn, 'active'));
    addClass(button, 'active');

    // 切换面板的可见性
    panels.forEach((panel, i) => {
      toggleClass(panel, 'active', i === index);
    });
  });
});
```
