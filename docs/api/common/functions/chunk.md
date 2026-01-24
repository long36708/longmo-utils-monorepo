[@longmo-utils/common](../index.md) / chunk

# Function: chunk()

```ts
function chunk<T>(arr, size): T[][];
```

将数组拆分成指定大小的子数组

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | 要拆分的输入数组 |
| `size` | `number` | 每个子数组的大小。如果小于等于 0，则默认为 1 |

## Returns

`T`[][]

子数组的数组

## Example

```ts
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
chunk([1, 2, 3], 5) // [[1, 2, 3]]
chunk([1, 2, 3], 0) // [[1], [2], [3]] (size 默认为 1)
chunk([1, 2, 3], -2) // [[1], [2], [3]] (size 默认为 1)
```
