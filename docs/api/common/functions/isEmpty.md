[@longmo-utils/common](../index.md) / isEmpty

# Function: isEmpty()

```ts
function isEmpty(str): boolean;
```

检查字符串是否为空或只包含空白字符

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` \| `null` \| `undefined` | 输入字符串 |

## Returns

`boolean`

如果为空或只包含空白字符返回 true

## Example

```ts
isEmpty('') // true
isEmpty('   ') // true
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty('hello') // false
```
