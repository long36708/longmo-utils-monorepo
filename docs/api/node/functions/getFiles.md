[@longmo-utils/node](../index.md) / getFiles

# Function: getFiles()

```ts
function getFiles(dirPath, extensions?): Promise<string[]>;
```

递归获取目录下的所有文件

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dirPath` | `string` | 目录路径 |
| `extensions?` | `string`[] | 可选的文件扩展名过滤器 |

## Returns

`Promise`\<`string`[]\>

文件路径数组

## Example

```ts
const allFiles = await getFiles('./src')
const tsFiles = await getFiles('./src', ['.ts', '.tsx'])
```
