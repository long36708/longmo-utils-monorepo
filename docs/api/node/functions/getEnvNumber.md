[@longmo-utils/node](../index.md) / getEnvNumber

# Function: getEnvNumber()

```ts
function getEnvNumber(key, defaultValue): number;
```

获取数字类型的环境变量

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | 环境变量键 |
| `defaultValue` | `number` | `0` | 默认值（默认: 0） |

## Returns

`number`

数字值

## Example

```ts
const port = getEnvNumber('PORT', 3000)
```
