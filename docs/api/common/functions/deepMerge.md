[@longmo-utils/common](../index.md) / deepMerge

# Function: deepMerge()

```ts
function deepMerge<T>(...objects): T;
```

深度合并多个对象

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`\<`string`, `any`\> |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`objects` | `Partial`\<`T`\>[] | 要合并的对象数组 |

## Returns

`T`

合并后的对象

## Example

```ts
deepMerge({a: 1}, {b: 2}) // {a: 1, b: 2}
deepMerge({a: {x: 1}}, {a: {y: 2}}) // {a: {x: 1, y: 2}}
```
