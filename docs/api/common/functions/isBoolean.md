[@longmo-utils/common](../index.md) / isBoolean

# Function: isBoolean()

```ts
function isBoolean(arg): boolean;
```

是否是布尔值

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isBoolean(123) // false
isBoolean(Boolean('1')) // true
isBoolean(true) // true
```
