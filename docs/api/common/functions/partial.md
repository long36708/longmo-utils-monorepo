[@longmo-utils/common](../index.md) / partial

# Function: partial()

```ts
function partial<T>(fn, ...presetArgs): (...remainingArgs) => ReturnType<T>;
```

创建偏函数，预设部分参数

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `T` | 原始函数 |
| ...`presetArgs` | `any`[] | 预设的参数 |

## Returns

偏函数

```ts
(...remainingArgs): ReturnType<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`remainingArgs` | `any`[] |

### Returns

`ReturnType`\<`T`\>

## Example

```ts
const add = (a: number, b: number) => a + b
const add5 = partial(add, 5)
add5(3) // 8
```
