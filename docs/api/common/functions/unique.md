[@longmo-utils/common](../index.md) / unique

# Function: unique()

```ts
function unique<T>(arr): T[];
```

移除数组中的重复值

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | 输入数组 |

## Returns

`T`[]

去除重复值后的新数组

## Example

```ts
unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
unique(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
```
