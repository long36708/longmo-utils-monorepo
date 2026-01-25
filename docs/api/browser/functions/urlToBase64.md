[@longmo-utils/browser](../index.md) / urlToBase64

# Function: urlToBase64()

```ts
function urlToBase64(url, mineType?): Promise<string>;
```

将图片 URL 转换为 Base64 编码

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | 图片 URL 地址 |
| `mineType?` | `string` | 指定输出的 MIME 类型，默认为 'image/png' |

## Returns

`Promise`\<`string`\>

返回 Base64 编码的图片数据

## Examples

```typescript
const base64 = await urlToBase64('https://example.com/image.jpg');
console.log(base64); // 'data:image/png;base64,...'
```

```typescript
const jpegBase64 = await urlToBase64(
  'https://example.com/image.png',
  'image/jpeg'
);
```

```typescript
const base64Data = await urlToBase64('https://example.com/photo.jpg');
downloadFileFromBase64({
  source: base64Data,
  fileName: 'photo.jpg'
});
```
