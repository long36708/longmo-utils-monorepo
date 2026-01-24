[@longmo-utils/common](../index.md) / set

# Function: set()

```ts
function set(
   obj, 
   path, 
   value): void;
```

通过路径字符串设置对象的嵌套值

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `any` | 对象 |
| `path` | `string` | 路径字符串，使用点分隔 |
| `value` | `any` | 要设置的值 |

## Returns

`void`

## Example

```ts
const obj = {a: {}}
set(obj, 'a.b.c', 1)
console.log(obj) // {a: {b: {c: 1}}}
```
