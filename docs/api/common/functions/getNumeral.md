[@longmo-utils/common](../index.md) / getNumeral

# Function: getNumeral()

```ts
function getNumeral(): Promise<any>;
```

异步获取 Numeral 实例（已配置中文本地化）
这是一个懒加载导入，避免将 numeral 作为直接依赖

## Returns

`Promise`\<`any`\>

## Example

```ts
const numeral = await getNumeral()
numeral(1000).format('$0,0.00') // '¥1,000.00'
```
