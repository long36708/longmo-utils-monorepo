[@longmo-utils/node](../index.md) / exists

# Function: exists()

```ts
function exists(filePath): Promise<boolean>;
```

检查文件或目录是否存在

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | 文件或目录路径 |

## Returns

`Promise`\<`boolean`\>

是否存在

## Example

```ts
const isExist = await exists('./config.json')
```
