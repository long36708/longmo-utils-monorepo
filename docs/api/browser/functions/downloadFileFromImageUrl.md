[@longmo-utils/browser](../index.md) / downloadFileFromImageUrl

# Function: downloadFileFromImageUrl()

```ts
function downloadFileFromImageUrl(options): Promise<void>;
```

通过图片 URL 下载图片文件

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`DownloadOptions`](../interfaces/DownloadOptions.md) | 下载选项 |

## Returns

`Promise`\<`void`\>

## Examples

```typescript
await downloadFileFromImageUrl({
  source: 'https://example.com/image.jpg',
  fileName: 'downloaded-image.jpg'
});
```

```typescript
await downloadFileFromImageUrl({
  source: 'https://example.com/icon.svg',
  fileName: 'icon.svg'
});
```
