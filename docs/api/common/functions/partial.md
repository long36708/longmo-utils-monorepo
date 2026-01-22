[@longmo-utils/common](../index.md) / partial

# Function: partial()

```ts
function partial<T>(fn, ...presetArgs): (...remainingArgs) => ReturnType<T>;
```

Creates a partially applied function

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | `T` |
| ...`presetArgs` | `any`[] |

## Returns

```ts
(...remainingArgs): ReturnType<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`remainingArgs` | `any`[] |

### Returns

`ReturnType`\<`T`\>
