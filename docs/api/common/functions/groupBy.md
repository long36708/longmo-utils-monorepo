[@longmo-utils/common](../index.md) / groupBy

# Function: groupBy()

```ts
function groupBy<T, K>(arr, keyFn): Record<K, T[]>;
```

根据键函数对数组元素进行分组

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* `string` \| `number` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | 要分组的输入数组 |
| `keyFn` | (`item`) => `K` | 返回每个元素的分组键的函数 |

## Returns

`Record`\<`K`, `T`[]\>

对象，其中键是分组结果，值是元素数组

## Example

```ts
const data = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
]
groupBy(data, item => item.role)
// { admin: [{ name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' }],
//   user: [{ name: 'Bob', role: 'user' }] }
```
