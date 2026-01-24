[@longmo-utils/common](../index.md) / safeParseJson

# Function: safeParseJson()

```ts
function safeParseJson(jsonString, rollback): jsonType;
```

安全的JSON字符串解析

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jsonString` | `any` | 待转换的字符串 |
| `rollback` | [`jsonType`](../type-aliases/jsonType.md) | 转换失败后回退的备选值，默认`{}` |

## Returns

[`jsonType`](../type-aliases/jsonType.md)

JSONObject JSONArray

## Example

```ts
safeParseJson('{"name": "abc", age: 20}'); // => {name: "abc", age: 20} 正常解析
safeParseJson(0); // => {} 解析失败默认回退处理
safeParseJson(`[name=123]`, []); // => [] 解析失败回退处理
```
