[@longmo-utils/node](../index.md) / getPlatform

# Function: getPlatform()

```ts
function getPlatform(): Platform;
```

获取当前平台

## Returns

`Platform`

平台名称（win32、darwin、linux 等）

## Example

```ts
const platform = getPlatform()
console.log(platform) // 'win32' | 'darwin' | 'linux'
```
