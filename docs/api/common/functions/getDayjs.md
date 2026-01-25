[@longmo-utils/common](../index.md) / getDayjs

# Function: getDayjs()

```ts
function getDayjs(): Promise<any>;
```

异步获取 Dayjs 实例（已配置中文本地化和季度插件）
这是一个懒加载导入，避免将 dayjs 作为直接依赖

## Returns

`Promise`\<`any`\>

## Example

```ts
const dayjs = await getDayjs()
dayjs().format('YYYY-MM-DD') // '2024-01-25'
```
