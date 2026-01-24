[@longmo-utils/common](../index.md) / isError

# Function: isError()

```ts
function isError(arg): boolean;
```

是否是错误对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isError(new Error('122')) // true
```
