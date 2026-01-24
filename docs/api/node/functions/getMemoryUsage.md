[@longmo-utils/node](../index.md) / getMemoryUsage

# Function: getMemoryUsage()

```ts
function getMemoryUsage(): MemoryUsage;
```

获取内存使用信息

## Returns

`MemoryUsage`

内存使用信息对象

## Example

```ts
const usage = getMemoryUsage()
console.log(usage)
// {
//   rss: 12345678,
//   heapTotal: 8765432,
//   heapUsed: 4321098,
//   external: 123456,
//   arrayBuffers: 12345
// }
```
