[@longmo-utils/common](../index.md) / camelCase

# Function: camelCase()

```ts
function camelCase(str): string;
```

将字符串转换为驼峰命名

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 输入字符串 |

## Returns

`string`

驼峰命名字符串

## Example

```ts
camelCase('hello-world') // 'helloWorld'
camelCase('hello_world') // 'helloWorld'
camelCase('hello world') // 'helloWorld'
```
