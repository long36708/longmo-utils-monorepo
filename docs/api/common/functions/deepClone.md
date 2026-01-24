[@longmo-utils/common](../index.md) / deepClone

# Function: deepClone()

```ts
function deepClone<T>(obj): T;
```

深度克隆一个对象

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | 要克隆的对象 |

## Returns

`T`

克隆后的对象

## Example

```ts
const obj = {a: 1, b: {c: 2}}
const cloned = deepClone(obj)
cloned.b.c = 3
console.log(obj.b.c) // 2
```
