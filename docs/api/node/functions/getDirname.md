[@longmo-utils/node](../index.md) / getDirname

# Function: getDirname()

```ts
function getDirname(url): string;
```

获取当前模块的目录名

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | 模块的 URL |

## Returns

`string`

目录名

## Example

```ts
const __dirname = getDirname(import.meta.url)
```
