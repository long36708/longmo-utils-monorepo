[@longmo-utils/common](../index.md) / memoize

# Function: memoize()

```ts
function memoize<T>(fn, keyFn?): T;
```

创建函数的记忆化版本，缓存函数结果

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `T` | 要记忆化的函数 |
| `keyFn?` | (...`args`) => `string` | 可选的缓存键生成函数 |

## Returns

`T`

记忆化后的函数

## Example

```ts
const memoizedFn = memoize((a: number) => a * 2)
memoizedFn(2) // 4，计算并缓存
memoizedFn(2) // 4，从缓存返回
```
