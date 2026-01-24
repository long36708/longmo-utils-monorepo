[@longmo-utils/common](../index.md) / debounce

# Function: debounce()

```ts
function debounce<T>(fn, delay): (...args) => void;
```

防抖函数，延迟执行函数

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `T` | 要执行的函数 |
| `delay` | `number` | 延迟时间（毫秒） |

## Returns

防抖后的函数

```ts
(...args): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Parameters`\<`T`\> |

### Returns

`void`

## Example

```ts
const debouncedFn = debounce(() => console.log('hello'), 300)
debouncedFn() // 300ms 后执行
debouncedFn() // 重置计时器，300ms 后执行
```
