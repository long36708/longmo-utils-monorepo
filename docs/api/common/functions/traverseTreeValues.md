[@longmo-utils/common](../index.md) / traverseTreeValues

# Function: traverseTreeValues()

```ts
function traverseTreeValues<T, V>(
   tree, 
   getValue, 
   options?): V[];
```

遍历树形结构，并返回所有节点中指定的值

使用深度优先遍历（DFS）遍历树形结构的所有节点，提取每个节点的指定值

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | 树节点类型 |
| `V` | 节点值的类型 |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tree` | `T`[] | 树形结构数组 |
| `getValue` | (`node`) => `V` | 获取节点值的函数 |
| `options?` | [`TreeConfigOptions`](../interfaces/TreeConfigOptions.md) | 配置选项 |

## Returns

`V`[]

所有节点中指定的值的数组

## Examples

```typescript
const tree = [
  { id: 1, name: 'A', children: [{ id: 2, name: 'A-1' }] },
  { id: 3, name: 'B' }
];
const ids = traverseTreeValues(tree, node => node.id);
console.log(ids); // [1, 2, 3]
```

```typescript
const tree = [
  { id: 1, items: [{ id: 2 }] }
];
const ids = traverseTreeValues(
  tree,
  node => node.id,
  { childProps: 'items' }
);
```

```typescript
const names = traverseTreeValues(tree, node => node.name);
console.log(names); // ['A', 'A-1', 'B']
```
