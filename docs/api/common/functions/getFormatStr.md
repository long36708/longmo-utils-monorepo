[@longmo-utils/common](../index.md) / getFormatStr

# Function: getFormatStr()

```ts
function getFormatStr(options): string;
```

快速生成numeraljs格式字符串, 处理千分位和小数位，可以继续使用format方法进行格式化，小数位处理方式四舍五入

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `separate`: `boolean`; `point`: `number`; \} | 格式选项同数字组件的options { separate: true, point: 0 } |
| `options.separate` | `boolean` | - |
| `options.point` | `number` | - |

## Returns

`string`

返回格式字符串

## Remarks

## Example

```ts
getFormatStr() // "0,0" 默认格式字符串
getFormatStr({ separate: true, point: 2 }) // '0,0.00'
getFormatStr({ separate: false, point: 2 }) // '00.00'
```
