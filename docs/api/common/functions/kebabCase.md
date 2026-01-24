[@longmo-utils/common](../index.md) / kebabCase

# Function: kebabCase()

```ts
function kebabCase(str): string;
```

将字符串转换为短横线命名

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 输入字符串 |

## Returns

`string`

短横线命名字符串

## Example

```ts
kebabCase('helloWorld') // 'hello-world'
kebabCase('hello_world') // 'hello-world'
kebabCase('hello world') // 'hello-world'
```
