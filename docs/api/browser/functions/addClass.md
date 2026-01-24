[@longmo-utils/browser](../index.md) / addClass

# Function: addClass()

```ts
function addClass(element, ...classNames): void;
```

向元素添加一个或多个 CSS 类

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | 要添加类的 DOM 元素 |
| ...`classNames` | `string`[] | 一个或多个要添加的类名 |

## Returns

`void`

## Examples

```typescript
const button = $('button');
addClass(button, 'active');
addClass(button, 'highlight', 'primary');
```

```typescript
const card = $('.card');
if (card) {
  const isFeatured = card.dataset.featured === 'true';
  if (isFeatured) {
    addClass(card, 'featured', 'highlight');
  }
}
```

```typescript
const buttons = $$('button');
buttons.forEach(button => {
  addClass(button, 'btn', 'btn-primary');
});
```

```typescript
const alerts = $$('.alert');
alerts.forEach(alert => {
  const type = alert.dataset.type;
  if (type === 'error') addClass(alert, 'alert-error');
  if (type === 'warning') addClass(alert, 'alert-warning');
  if (type === 'success') addClass(alert, 'alert-success');
});
```
