[@longmo-utils/common](../index.md) / getSystemTimezone

# Function: getSystemTimezone()

```ts
function getSystemTimezone(): string;
```

获取当前时区

## Returns

`string`

当前时区名称（如 'Asia/Shanghai'）

## Example

```typescript
const tz = getSystemTimezone();
console.log(tz); // 'Asia/Shanghai'
```
