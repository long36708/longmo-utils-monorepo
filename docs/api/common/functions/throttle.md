[@longmo-utils/common](../index.md) / throttle

# Function: throttle()

```ts
function throttle<T>(fn, delay): (...args) => void;
```

节流函数，限制函数执行频率

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `T` | 要执行的函数 |
| `delay` | `number` | 节流时间间隔（毫秒） |

## Returns

节流后的函数

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
const throttledFn = throttle(() => console.log('hello'), 300)
throttledFn() // 立即执行
throttledFn() // 300ms 内不执行
```
