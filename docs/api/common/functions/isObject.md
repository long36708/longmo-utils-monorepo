[@longmo-utils/common](../index.md) / isObject

# Function: isObject()

```ts
function isObject(arg): boolean;
```

是否是对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isObject({}) // true
isObject(1) // false
isObject([]) // false
```
