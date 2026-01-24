[@longmo-utils/node](../index.md) / readFileOrDefault

# Function: readFileOrDefault()

```ts
function readFileOrDefault<T>(filePath, defaultValue): Promise<T>;
```

如果文件存在则读取，否则返回默认值

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | 文件路径 |
| `defaultValue` | `T` | 默认值 |

## Returns

`Promise`\<`T`\>

文件内容或默认值

## Example

```ts
const config = await readFileOrDefault('./config.json', { theme: 'light' })
```
