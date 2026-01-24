[@longmo-utils/common](../index.md) / isArray

# Function: isArray()

```ts
function isArray(arg): boolean;
```

是否是数组

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isArray({}) // false
isArray(1) // false
isArray([]) // true
```
