[@longmo-utils/node](../index.md) / copy

# Function: copy()

```ts
function copy(src, dest): Promise<void>;
```

递归复制文件或目录

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | 源路径 |
| `dest` | `string` | 目标路径 |

## Returns

`Promise`\<`void`\>

## Example

```ts
await copy('./src', './dist')
```
