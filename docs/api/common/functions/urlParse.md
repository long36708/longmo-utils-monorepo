[@longmo-utils/common](../index.md) / urlParse

# Function: urlParse()

```ts
function urlParse(urlString): IURL;
```

url解析，在URL基础上扩展了查询字符串解析对象

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `urlString` | `string` | `''` | url格式字符串 |

## Returns

[`IURL`](../interfaces/IURL.md)

IURL - 返回URL对象扩展了searchObject和hashSearchObject

## Example

```ts
const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
const url = urlParse(urlStr)
{
 hash: "#/hashpath1/hashpath2?hashfoo=1&hashbar=a",
 hashSearchObject: {
   hashfoo: '1',
   hashbar: 'a'
 }
 host: "www.baidu.com"
 hostname: "www.baidu.com"
 href: "https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a"
 origin: "https://www.baidu.com"
 password: ""
 pathname: "/path1/path2"
 port: ""
 protocol: "https:"
 search: "?foo=1&bar=a/"
 searchObject: {
   foo: '1',
   bar: 'a'
 }
 username: ""
}
```
