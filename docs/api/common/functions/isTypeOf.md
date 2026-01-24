[@longmo-utils/common](../index.md) / isTypeOf

# Function: isTypeOf()

```ts
function isTypeOf(arg): string;
```

安全的类型检查

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg` | `any` | 判断的参数 |

## Returns

`string`

返回类型字符串

## Example

```ts
isTypeOf(10);                  // "number"
isTypeOf("abc");               // "string"
isTypeOf(true);                // "boolean"
isTypeOf(null);                // "null"
isTypeOf(undefined);           // "undefined"
isTypeOf({a: 1});              // "object"
isTypeOf([1,2,3]);             // "array"
isTypeOf(new Date());          // "date"
isTypeOf(/^\d{6}$/);           // "regexp"
isTypeOf(Symbol('1'));         // "symbol"
isTypeOf(function(){});        // "function"
isTypeOf(new Error());         // "error"
isTypeOf(new Promise(()=>{})); // "promise"
isTypeOf(new Set());           // "set"
isTypeOf(new Map());           // "map"
isTypeOf(Math);                // "math"
```
