[@longmo-utils/common](../index.md) / getNumeralSync

# Function: getNumeralSync()

```ts
function getNumeralSync(): any;
```

同步获取 Numeral 实例（仅用于测试环境）
使用 ESM 动态导入，配合 vitest setupFiles 预加载使用

注意：此函数本质是异步的，但为了保持 API 一致性命名为 sync
请确保在测试运行前通过 setupFiles 预加载

## Returns

`any`

## Throws

如果 numeral 未安装

## Example

```ts
// 在测试 setup 文件中预加载
import { getNumeralSync } from './_numeral'
await getNumeralSync()

// 然后在代码中可以直接使用
const numeral = getNumeralSync() // 返回缓存实例
```
