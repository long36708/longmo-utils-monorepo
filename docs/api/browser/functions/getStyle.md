[@longmo-utils/browser](../index.md) / getStyle

# Function: getStyle()

```ts
function getStyle(element, property): string;
```

获取元素指定 CSS 属性的计算值

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | 要获取样式的 DOM 元素 |
| `property` | `string` | CSS 属性名 (例如 'color', 'font-size') |

## Returns

`string`

CSS 属性的计算值

## Examples

```typescript
const header = $('header');
const bgColor = getStyle(header, 'background-color');
const fontSize = getStyle(header, 'font-size');
const color = getStyle(header, 'color');
```

```typescript
const element = $('.responsive-element');
if (element) {
  const display = getStyle(element, 'display');
  const isVisible = display !== 'none';

  if (isVisible) {
    const width = getStyle(element, 'width');
    console.log('Element width:', width);
  }
}
```

```typescript
const header = $('header');
const footer = $('footer');

if (header && footer) {
  const headerHeight = parseInt(getStyle(header, 'height'));
  const footerHeight = parseInt(getStyle(footer, 'height'));

  if (headerHeight > footerHeight) {
    console.log('Header is taller than footer');
  }
}
```

```typescript
const button = $('button');
if (button) {
  const bgColor = getStyle(button, 'background-color');
  const textColor = getStyle(button, 'color');

  // 转换为 RGB 并调整亮度
  const rgb = bgColor.match(/\d+/g);
  if (rgb) {
    const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    const shouldUseLightText = brightness < 128;
  }
}
```
