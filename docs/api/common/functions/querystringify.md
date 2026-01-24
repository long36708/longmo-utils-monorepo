[@longmo-utils/common](../index.md) / querystringify

# Function: querystringify()

```ts
function querystringify(obj, prefix): string;
```

querystring转换成对象

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `obj` | `object` | `undefined` | 需要被转换的查询对象 |
| `prefix` | `string` | `''` | 添加前缀 |

## Returns

`string`

url查询字符串

## Example

```ts
 querystringify({ foo: bar });       // foo=bar
 querystringify({ foo: bar }, '#');  // #foo=bar
 querystringify({ foo: '' }, '&');   // &foo=
```
