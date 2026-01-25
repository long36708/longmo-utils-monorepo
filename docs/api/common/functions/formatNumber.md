[@longmo-utils/common](../index.md) / formatNumber

# Function: formatNumber()

```ts
function formatNumber(input, format): string;
```

数字格式化

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | `number` | `undefined` | 待格式化数字 |
| `format` | `string` | `'0,0[.]00'` | 输出格式，默认'0,0[.]00'，小数位（可选）有则四舍五入保留2位小数，自定义需手动指定格式 |

## Returns

`string`

返回千分位格式化字符串

## Remarks

```
`0,0[.]00` - 小数位（可选）有则四舍五入保留2位小数
format用法：http://numeraljs.com/
```

## Example

```ts
formatNumber(789789.025) // "789,789.03"
formatNumber(789789.00) // "789,789"
formatNumber(789789.005) // "789,789.01"
formatNumber(1230974, '0.0a') // 1.2千万
```
