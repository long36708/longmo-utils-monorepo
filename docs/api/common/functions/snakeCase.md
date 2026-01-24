[@longmo-utils/common](../index.md) / snakeCase

# Function: snakeCase()

```ts
function snakeCase(str): string;
```

将字符串转换为下划线命名

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 输入字符串 |

## Returns

`string`

下划线命名字符串

## Example

```ts
snakeCase('helloWorld') // 'hello_world'
snakeCase('hello-world') // 'hello_world'
snakeCase('hello world') // 'hello_world'
```
