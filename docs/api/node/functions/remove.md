[@longmo-utils/node](../index.md) / remove

# Function: remove()

```ts
function remove(filePath): Promise<void>;
```

递归删除文件或目录

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | 文件或目录路径 |

## Returns

`Promise`\<`void`\>

## Example

```ts
await remove('./temp')
```
