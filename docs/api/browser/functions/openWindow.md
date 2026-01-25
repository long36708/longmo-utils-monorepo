[@longmo-utils/browser](../index.md) / openWindow

# Function: openWindow()

```ts
function openWindow(url, options): void;
```

在新窗口中打开 URL

使用 window.open 方法打开指定 URL，支持配置窗口行为和安全特性

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | 需要打开的网址 |
| `options` | [`OpenWindowOptions`](../interfaces/OpenWindowOptions.md) | 打开窗口的选项 |

## Returns

`void`

## Examples

```typescript
openWindow('https://example.com');
```

```typescript
openWindow('https://example.com', { target: '_self' });
```

```typescript
openWindow('https://example.com', {
  noopener: false,
  noreferrer: false
});
```

```typescript
openWindow('https://example.com', { target: '_parent' });
```
