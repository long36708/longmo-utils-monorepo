[@longmo-utils/common](../index.md) / isEmptyObject

# Function: isEmptyObject()

```ts
function isEmptyObject(arg): boolean;
```

是否是空对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` |  |

## Returns

`boolean`

`true|false`

## Remarks

```
1、校验结果和`jquery.isEmptyObject()`一致
2、只有可枚举对象并且有枚举的值才返回false
3、不可枚举值，始终返回true
```

## Example

```ts
isEmptyObject('') // true 不可枚举
isEmptyObject(null) // true 不可枚举
isEmptyObject(undefined) // true 不可枚举
isEmptyObject({}) // true 可枚举，没有枚举属性
isEmptyObject({a:1}) // false 可枚举，有枚举属性
isEmptyObject(new Object()) // true 可枚举，没有属性
isEmptyObject([]) // true 可枚举，没有枚举属性
isEmptyObject([1]) // false 可枚举，有枚举属性
```
