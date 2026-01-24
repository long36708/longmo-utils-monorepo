[@longmo-utils/common](../index.md) / parseQueryString

# Function: parseQueryString()

```ts
function parseQueryString(query): Record<string, string | undefined>;
```

解析URL查询字符串，转换成JSON格式

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | 查询字符串，可以是?开头也可以是#号开头 |

## Returns

`Record`\<`string`, `string` \| `undefined`\>

解析为对象

## Example

```ts
parseQueryString('?foo=bar');         // { foo: 'bar' }
parseQueryString('#foo=bar');         // { foo: 'bar' }
parseQueryString('foo=bar');          // { foo: 'bar' }
parseQueryString('foo=bar&bar=foo');  // { foo: 'bar', bar: 'foo' }
parseQueryString('foo&bar=foo');      // { foo: '', bar: 'foo' }
```
