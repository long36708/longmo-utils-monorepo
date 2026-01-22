[@longmo-utils/common](../index.md) / memoize

# Function: memoize()

```ts
function memoize<T>(fn, keyFn?): T;
```

Creates a memoized version of a function

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | `T` |
| `keyFn?` | (...`args`) => `string` |

## Returns

`T`
