[@longmo-utils/browser](../index.md) / downloadFileFromBlob

# Function: downloadFileFromBlob()

```ts
function downloadFileFromBlob(options): void;
```

通过 Blob 对象下载文件

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`DownloadOptions`](../interfaces/DownloadOptions.md)\<`Blob`\> | 下载选项 |

## Returns

`void`

## Throws

- 当源数据不是 Blob 对象时抛出错误

## Examples

```typescript
const textBlob = new Blob(['Hello World'], { type: 'text/plain' });
downloadFileFromBlob({
  source: textBlob,
  fileName: 'hello.txt'
});
```

```typescript
const jsonData = { name: 'test', value: 123 };
const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
downloadFileFromBlob({
  source: jsonBlob,
  fileName: 'data.json'
});
```
