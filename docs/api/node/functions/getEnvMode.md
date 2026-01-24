[@longmo-utils/node](../index.md) / getEnvMode

# Function: getEnvMode()

```ts
function getEnvMode(): string;
```

获取当前环境模式（development、production、test）

## Returns

`string`

环境模式

## Example

```ts
const mode = getEnvMode()
console.log(mode) // 'development' | 'production' | 'test'
```
