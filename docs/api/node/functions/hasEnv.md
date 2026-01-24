[@longmo-utils/node](../index.md) / hasEnv

# Function: hasEnv()

```ts
function hasEnv(key): boolean;
```

检查环境变量是否已设置

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | 环境变量键 |

## Returns

`boolean`

是否已设置

## Example

```ts
if (hasEnv('API_KEY')) {
  console.log('API_KEY is set')
}
```
