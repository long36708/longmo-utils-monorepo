[@longmo-utils/browser](../index.md) / scrollIntoView

# Function: scrollIntoView()

```ts
function scrollIntoView(element, options?): void;
```

将指定元素滚动到浏览器窗口的可见区域

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | 要滚动到可见区域的 DOM 元素 |
| `options?` | `ScrollIntoViewOptions` | 可选的滚动行为选项 (默认为平滑滚动) |

## Returns

`void`

## Examples

```typescript
const section = $('section');
scrollIntoView(section);
```

```typescript
const section = $('section');
scrollIntoView(section);

// 滚动到顶部
scrollIntoView(section, { block: 'start' });

// 滚动到中间
scrollIntoView(section, { block: 'center' });

// 滚动到底部
scrollIntoView(section, { block: 'end' });
```

```typescript
const navLinks = $$('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = $(targetId);
    if (target) {
      scrollIntoView(target, { block: 'start' });
    }
  });
});
```

```typescript
const form = $('form');
const submitButton = $('button[type="submit"]');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const invalidInputs = $$('input:invalid');
  if (invalidInputs.length > 0) {
    // 滚动到第一个无效输入框
    scrollIntoView(invalidInputs[0], { block: 'center' });

    // 添加错误高亮
    invalidInputs.forEach(input => {
      addClass(input, 'error');
    });
  }
});
```

```typescript
const tocLinks = $$('.toc a');

tocLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = $(targetId);
    if (target) {
      scrollIntoView(target, {
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
      });
    }
  });
});
```
