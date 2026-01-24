[@longmo-utils/common](../index.md) / isNumber

# Function: isNumber()

```ts
function isNumber(arg): boolean;
```

是否是数字

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isNumber(123) // true
isNumber(Number('1')) // true
isNumber("abc") // false
```
