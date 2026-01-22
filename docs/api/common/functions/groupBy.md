[@longmo-utils/common](../index.md) / groupBy

# Function: groupBy()

```ts
function groupBy<T, K>(arr, keyFn): Record<K, T[]>;
```

Groups array elements by a key function

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* `string` \| `number` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `arr` | `T`[] |
| `keyFn` | (`item`) => `K` |

## Returns

`Record`\<`K`, `T`[]\>
