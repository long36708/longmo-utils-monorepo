[@longmo-utils/common](../index.md) / throttle

# Function: throttle()

```ts
function throttle<T>(fn, delay): (...args) => void;
```

Throttles a function call

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | `T` |
| `delay` | `number` |

## Returns

```ts
(...args): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Parameters`\<`T`\> |

### Returns

`void`
