[@longmo-utils/browser](../index.md) / downloadFileFromBase64

# Function: downloadFileFromBase64()

```ts
function downloadFileFromBase64(options): void;
```

通过 Base64 数据下载文件

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`DownloadOptions`](../interfaces/DownloadOptions.md) | 下载选项 |

## Returns

`void`

## Throws

- 当 Base64 数据无效时抛出错误

## Examples

```typescript
downloadFileFromBase64({
  source: 'data:image/png;base64,iVBORw0KGgoAAAANS...',
  fileName: 'image.png'
});
```

```typescript
downloadFileFromBase64({
  source: 'data:text/plain;base64,SGVsbG8gV29ybGQ='
});
```
