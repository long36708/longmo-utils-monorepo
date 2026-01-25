[@longmo-utils/common](../index.md) / unformat

# Function: unformat()

```ts
function unformat(input): number;
```

反格式化，自动识别格式

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | `string` | `''` | 待格式化数字 |

## Returns

`number`

返回转换后的数字，无法识别返回NaN

## Remarks

format用法：http://numeraljs.com/

## Example

```ts
unformat('18:13:09') // 65589 (秒)
unformat('34.78%') //  0.3478
unformat('7,883.9876') //  7883.9876
unformat('￥7,883.9876') //  7883.9876
unformat('1.8千') //  1800
unformat('1.8百万') //  1800000
unformat('1.8十亿') //  1800000000
unformat('1.8兆') //  1800000000000
```
