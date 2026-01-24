[@longmo-utils/common](../index.md) / get

# Function: get()

```ts
function get(
   obj, 
   path, 
   defaultValue?): any;
```

通过路径字符串获取对象的嵌套值

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `any` | 对象 |
| `path` | `string` | 路径字符串，使用点分隔 |
| `defaultValue?` | `any` | 默认值 |

## Returns

`any`

获取的值

## Example

```ts
const obj = {a: {b: {c: 1}}}
get(obj, 'a.b.c') // 1
get(obj, 'a.b.d', 'default') // 'default'
```
