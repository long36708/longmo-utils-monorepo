[@longmo-utils/common](../index.md) / isPromise

# Function: isPromise()

```ts
function isPromise(arg): boolean;
```

是否是Promise

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 参数 |

## Returns

`boolean`

`true|false`

## Example

```ts
isPromise(new Promise(()=>{})) // true
```
