[@longmo-utils/common](../index.md) / convertCurrency

# Function: convertCurrency()

```ts
function convertCurrency(currencyDigits, prefixSymbol): string;
```

阿拉伯数字换成汉字大写金额

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `currencyDigits` | `string` \| `number` | `undefined` | 转换的金额字符串或数字 |
| `prefixSymbol` | `boolean` | `false` | 前缀默认false（true=人民币, false=''） |

## Returns

`string`

转换成汉字大写金额格式

## Remarks

```
小数点最多支持到4位单位厘
金额最大支持1万亿
```

## Example

```ts
convertCurrency(0); // 零圆整
convertCurrency(1234) // 壹仟贰佰叁拾肆圆整
convertCurrency('9877662.090') // 玖佰捌拾柒万柒仟陆佰陆拾贰圆零角玖分
convertCurrency('9877662.097866') // 玖佰捌拾柒万柒仟陆佰陆拾贰圆零角玖分柒毫捌厘
convertCurrency('4231234.04', true)) // 人民币肆佰贰拾叁万壹仟贰佰叁拾肆圆零角肆分
```
