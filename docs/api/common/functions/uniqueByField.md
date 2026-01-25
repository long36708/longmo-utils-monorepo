[@longmo-utils/common](../index.md) / uniqueByField

# Function: uniqueByField()

```ts
function uniqueByField<T>(arr, key): T[];
```

根据指定字段对对象数组进行去重

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | 要去重的对象数组 |
| `key` | keyof `T` | 去重依据的字段名 |

## Returns

`T`[]

去重后的对象数组
