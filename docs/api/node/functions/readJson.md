[@longmo-utils/node](../index.md) / readJson

# Function: readJson()

```ts
function readJson<T>(filePath): Promise<T>;
```

读取 JSON 文件

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | 文件路径 |

## Returns

`Promise`\<`T`\>

解析后的 JSON 数据

## Example

```ts
const data = await readJson('./config.json')
```
