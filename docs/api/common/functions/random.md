[@longmo-utils/common](../index.md) / random

# Function: random()

```ts
function random(length): string;
```

生成指定长度的随机字符串

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `length` | `number` | `8` | 随机字符串的长度（默认: 8） |

## Returns

`string`

随机字符串

## Example

```ts
random() // 'aB3dE7fG'
random(12) // 'xY9kL2mN3pQ'
```
