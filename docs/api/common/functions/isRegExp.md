[@longmo-utils/common](../index.md) / isRegExp

# Function: isRegExp()

```ts
function isRegExp(arg): boolean;
```

是否是正则

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isRegExp(/^\d+/) // true
isRegExp(new RegExp("\w")) // true
```
