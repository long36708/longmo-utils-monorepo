[@longmo-utils/common](../index.md) / convertToHslCssVar

# Function: convertToHslCssVar()

```ts
function convertToHslCssVar(color): string;
```

将颜色转换为HSL CSS变量。

这个函数与convertToHsl函数类似，但是返回的字符串格式稍有不同，
以便可以作为CSS变量使用。

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `color` | `string` | 输入的颜色。 |

## Returns

`string`

可以作为CSS变量使用的HSL格式的颜色字符串。
