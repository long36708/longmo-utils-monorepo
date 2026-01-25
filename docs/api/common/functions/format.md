[@longmo-utils/common](../index.md) / format

# Function: format()

```ts
function format(input, format): string;
```

通用格式化，需要手动指定格式

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | `number` | `undefined` | 待格式化数字 |
| `format` | `string` | `''` | 输出格式，默认''，默认不保留小数，格式整数 |

## Returns

`string`

返回格式化字符串

## Remarks

format用法：http://numeraljs.com/

## Example

```ts
format(1230974.998979).format() // "1,230,975"
```
