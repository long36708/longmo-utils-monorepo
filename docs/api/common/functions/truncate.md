[@longmo-utils/common](../index.md) / truncate

# Function: truncate()

```ts
function truncate(
   str, 
   length, 
   suffix): string;
```

截断字符串到指定长度

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `str` | `string` | `undefined` | 输入字符串 |
| `length` | `number` | `undefined` | 最大长度 |
| `suffix` | `string` | `'...'` | 截断时添加的后缀（默认: '...'） |

## Returns

`string`

截断后的字符串

## Example

```ts
truncate('hello world', 5) // 'hello...'
truncate('hello world', 11) // 'hello world'
truncate('hello world', 5, '---') // 'hello---'
```
