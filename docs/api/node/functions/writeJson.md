[@longmo-utils/node](../index.md) / writeJson

# Function: writeJson()

```ts
function writeJson(filePath, data): Promise<void>;
```

将数据写入 JSON 文件

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | 文件路径 |
| `data` | `any` | 要写入的数据 |

## Returns

`Promise`\<`void`\>

## Example

```ts
await writeJson('./config.json', { name: 'test' })
```
