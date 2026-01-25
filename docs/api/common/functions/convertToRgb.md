[@longmo-utils/common](../index.md) / convertToRgb

# Function: convertToRgb()

```ts
function convertToRgb(str): string;
```

将颜色转换为RGB颜色字符串
TinyColor无法处理hsl内包含'deg'、'grad'、'rad'或'turn'的字符串
比如 hsl(231deg 98% 65%)将被解析为rgb(0, 0, 0)
这里在转换之前先将这些单位去掉

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 表示HLS颜色值的字符串 |

## Returns

`string`

如果颜色值有效，则返回对应的RGB颜色字符串；如果无效，则返回rgb(0, 0, 0)
