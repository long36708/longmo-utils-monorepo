[@longmo-utils/node](../index.md) / getEnvBool

# Function: getEnvBool()

```ts
function getEnvBool(key, defaultValue): boolean;
```

获取布尔类型的环境变量

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | 环境变量键 |
| `defaultValue` | `boolean` | `false` | 默认值（默认: false） |

## Returns

`boolean`

布尔值

## Example

```ts
const enabled = getEnvBool('DEBUG', false)
// DEBUG=true 或 DEBUG=1 返回 true
// DEBUG=false 或 DEBUG=0 返回 false
```
