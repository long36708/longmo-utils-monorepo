[@longmo-utils/node](../index.md) / ensureDir

# Function: ensureDir()

```ts
function ensureDir(dirPath): Promise<void>;
```

确保目录存在，如果不存在则创建

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dirPath` | `string` | 目录路径 |

## Returns

`Promise`\<`void`\>

## Example

```ts
await ensureDir('./dist')
```
