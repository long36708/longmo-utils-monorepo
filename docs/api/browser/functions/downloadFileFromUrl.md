[@longmo-utils/browser](../index.md) / downloadFileFromUrl

# Function: downloadFileFromUrl()

```ts
function downloadFileFromUrl(options): Promise<void>;
```

通过 URL 下载文件，支持跨域

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`DownloadOptions`](../interfaces/DownloadOptions.md) | 下载选项 |

## Returns

`Promise`\<`void`\>

## Throws

- 当下载失败时抛出错误

## Examples

```typescript
await downloadFileFromUrl({
  source: 'https://example.com/file.pdf',
  fileName: 'document.pdf'
});
```

```typescript
await downloadFileFromUrl({
  source: 'https://cdn.example.com/image.jpg',
  fileName: 'image.jpg'
});
```
