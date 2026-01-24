[@longmo-utils/common](../index.md) / IURL

# Interface: IURL

urlParse 解析返回类型

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="hash"></a> `hash?` | `string` | hash字符串 **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.hash); // Logs: '#/hashpath1/hashpath2?hashfoo=1&hashbar=a'` |
| <a id="hashsearchobject"></a> `hashSearchObject?` | `Record`\<`string`, `string` \| `undefined`\> | hash的查询字符串对象 **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.hashSearchObject); // Logs: { // hashfoo: '1', // hashbar: 'a' // }` |
| <a id="host"></a> `host?` | `string` | host **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.host); // Logs: 'www.baidu.com'` |
| <a id="hostname"></a> `hostname?` | `string` | hostname **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.hostname); // Logs: 'www.baidu.com'` |
| <a id="href"></a> `href?` | `string` | href **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.href); // Logs: 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'` |
| <a id="origin"></a> `origin?` | `string` | origin **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.origin); // Logs: 'https://www.baidu.com'` |
| <a id="password"></a> `password?` | `string` | password **Example** `const urlStr = 'https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username' const url = urlParse(urlStr) console.log(url.password) // Logs "flabada"` |
| <a id="pathname"></a> `pathname?` | `string` | pathname **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.pathname); // Logs: '/path1/path2'` |
| <a id="port"></a> `port?` | `string` | port **Example** `const urlStr = 'https://mydomain.com:80/svn/Repos/' const url = urlParse(urlStr) console.log(url.port); // Logs: '80'` |
| <a id="protocol"></a> `protocol?` | `string` | protocol **Example** `const urlStr = 'https://mydomain.com:80/svn/Repos/' const url = urlParse(urlStr) console.log(url.protocol); // Logs: 'https'` |
| <a id="search"></a> `search?` | `string` | 查询字符串 **Example** `{ search: "?foo=1&bar=a/" }` |
| <a id="searchobject"></a> `searchObject?` | `Record`\<`string`, `string` \| `undefined`\> | searchObject **Example** `const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a' const url = urlParse(urlStr) console.log(url.pathname); // Logs: '/path1/path2'` |
| <a id="username"></a> `username?` | `string` | origin **Example** `const urlStr = 'https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username' const url = urlParse(urlStr) console.log(url.username) // Logs: { // foo: '1', // bar: 'a' // }` |
