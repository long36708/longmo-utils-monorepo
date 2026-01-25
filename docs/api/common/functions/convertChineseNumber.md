[@longmo-utils/common](../index.md) / convertChineseNumber

# Function: convertChineseNumber()

```ts
function convertChineseNumber(num): string;
```

阿拉伯数字转中文数字

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | 需要转换的数字 |

## Returns

`string`

返回转换后的中文字符串

## Example

```ts
convertChineseNumber(0); // 零
convertChineseNumber(1); // 一
convertChineseNumber(10); // 十
convertChineseNumber(11); // 十一
convertChineseNumber(11.12); // 十一点一二
convertChineseNumber(100); // 一百
convertChineseNumber(123); // 一百二十三
```
