[@longmo-utils/common](../index.md) / isString

# Function: isString()

```ts
function isString(arg): boolean;
```

是否是字符串

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isString(123) // false
isString("abc") // true
isString(String(1)) // true
```
