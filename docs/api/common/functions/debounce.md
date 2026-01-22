[@longmo-utils/common](../index.md) / debounce

# Function: debounce()

```ts
function debounce<T>(fn, delay): (...args) => void;
```

Debounces a function call

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
