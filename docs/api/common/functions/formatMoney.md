[@longmo-utils/common](../index.md) / formatMoney

# Function: formatMoney()

```ts
function formatMoney(input, format): string;
```

金额格式化

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | `number` | `undefined` | 待格式化金额 |
| `format` | `string` | `'0,0.00'` | 输出格式，默认'0,0.00'，尾端保留2位小数，四舍五入，自定义需手动指定格式 |

## Returns

`string`

返回千分位格式化字符串

## Remarks

```
`0,0.00`：尾端保留2位小数，四舍五入
format用法：http://numeraljs.com/
```

## Example

```ts
formatMoney(1000.234) // 1,000.23
formatMoney(1000.235) // 1,000.24
formatMoney(1000.235, '$0,0.00') // ¥1,000.24 只设置货币
formatNumber(1230974, '0.0a') // 1.2千万
```
