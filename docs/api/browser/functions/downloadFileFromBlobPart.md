[@longmo-utils/browser](../index.md) / downloadFileFromBlobPart

# Function: downloadFileFromBlobPart()

```ts
function downloadFileFromBlobPart(options): void;
```

通过 BlobPart 数据下载文件

支持 Blob、字符串和其他 BlobPart 类型，如果不是 Blob 会自动转换

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`DownloadOptions`](../interfaces/DownloadOptions.md)\<`BlobPart`\> | 下载选项 |

## Returns

`void`

## Examples

```typescript
downloadFileFromBlobPart({
  source: 'Hello World',
  fileName: 'text.txt'
});
```

```typescript
const arrayBuffer = new Uint8Array([72, 101, 108, 108, 111]);
downloadFileFromBlobPart({
  source: arrayBuffer,
  fileName: 'data.bin'
});
```

```typescript
const blob = new Blob(['content'], { type: 'text/plain' });
downloadFileFromBlobPart({
  source: blob,
  fileName: 'file.txt'
});
```
