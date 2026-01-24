[@longmo-utils/common](../index.md) / isUndefined

# Function: isUndefined()

```ts
function isUndefined(arg): boolean;
```

是否是undefined

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isUndefined(undefined) // true
isUndefined(a) // true a未定义
isUndefined(void 0) // true
```
