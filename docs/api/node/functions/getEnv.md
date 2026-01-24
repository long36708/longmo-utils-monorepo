[@longmo-utils/node](../index.md) / getEnv

# Function: getEnv()

```ts
function getEnv(key, defaultValue?): string;
```

获取环境变量

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | 环境变量键 |
| `defaultValue?` | `string` | 默认值 |

## Returns

`string`

环境变量值

## Example

```ts
const value = getEnv('API_URL', 'http://localhost:3000')
```
