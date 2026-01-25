[@longmo-utils/common](../index.md) / formatPercentage

# Function: formatPercentage()

```ts
function formatPercentage(input, format): string;
```

百分比格式化

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | `number` | `undefined` | 待格式化数字 |
| `format` | `string` | `'0.00%'` | 输出格式，默认'0.[00]%'，小数位（可选）有则四舍五入保留2位小数，自定义需手动指定格式 |

## Returns

`string`

返回百分比格式化字符串

## Remarks

```
`0.[00]%` - 小数位（可选）有则四舍五入保留2位小数
format用法：http://numeraljs.com/
```

## Example

```ts
formatPercentage(0.4567) // "45.67%"
formatPercentage(0.456) // "45.6%"
formatPercentage(0.45600) // "46%"
formatPercentage(0.4567, '0.00%') // "45.67%"
```
