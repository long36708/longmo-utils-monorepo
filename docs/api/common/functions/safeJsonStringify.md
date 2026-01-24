[@longmo-utils/common](../index.md) / safeJsonStringify

# Function: safeJsonStringify()

```ts
function safeJsonStringify(value): any;
```

安全的json序列化，只对object和array进行转换，其他原样返回

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `any` | 待序列化的值 |

## Returns

`any`

序列化的值

## Example

```ts
safeJsonStringify({a:1}); // => `{"a":1}`
safeJsonStringify([1,"2"]); // => `[1,"2"]`
safeJsonStringify({}); // => null 空值处理
safeJsonStringify([]); // => null 空值处理
safeJsonStringify(null); // => null 空值处理
safeJsonStringify("abc"); // => "abc" 原样返回
safeJsonStringify(123); // => 123  原样返回
```
