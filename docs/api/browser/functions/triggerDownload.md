[@longmo-utils/browser](../index.md) / triggerDownload

# Function: triggerDownload()

```ts
function triggerDownload(
   href, 
   fileName, 
   revokeDelay): void;
```

通用下载触发函数

通过创建临时 `<a>` 标签并触发点击事件来下载文件，支持自动清理内存

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `href` | `string` | `undefined` | 文件下载的 URL 或 Blob URL |
| `fileName` | `string` \| `undefined` | `undefined` | 下载文件的名称，如果未提供则使用默认值 |
| `revokeDelay` | `number` | `100` | 清理 URL 的延迟时间（毫秒），默认为 100ms |

## Returns

`void`

## Examples

```typescript
triggerDownload('https://example.com/file.pdf', 'document.pdf');
```

```typescript
const blob = new Blob(['content'], { type: 'text/plain' });
const blobUrl = URL.createObjectURL(blob);
triggerDownload(blobUrl, 'file.txt', 200);
```

```typescript
triggerDownload('https://example.com/data.json', undefined);
```
