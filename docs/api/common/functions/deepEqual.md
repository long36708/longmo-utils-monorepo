[@longmo-utils/common](../index.md) / deepEqual

# Function: deepEqual()

```ts
function deepEqual(a, b): boolean;
```

深度比较两个对象是否相等

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `any` | 第一个对象 |
| `b` | `any` | 第二个对象 |

## Returns

`boolean`

是否相等

## Example

```ts
deepEqual({a: 1}, {a: 1}) // true
deepEqual({a: {b: 1}}, {a: {b: 1}}) // true
deepEqual({a: 1}, {a: 2}) // false
```
