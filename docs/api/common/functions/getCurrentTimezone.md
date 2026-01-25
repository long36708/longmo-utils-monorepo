[@longmo-utils/common](../index.md) / getCurrentTimezone

# Function: getCurrentTimezone()

```ts
function getCurrentTimezone(): string;
```

获取设置的时区

## Returns

`string`

当前设置的时区名称

## Example

```typescript
setCurrentTimezone('Asia/Tokyo');
const tz = getCurrentTimezone();
console.log(tz); // 'Asia/Tokyo'
```
