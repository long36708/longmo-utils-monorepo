[@longmo-utils/common](../index.md) / isNil

# Function: isNil()

```ts
function isNil(value): boolean;
```

检测`value`是否是`null`或`undefined`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `any` | 待检测值 |

## Returns

`boolean`

boolean

## Example

```ts
isNil(null); // => true
isNil(void 0); // => true
isNil(NaN); // => false
```
