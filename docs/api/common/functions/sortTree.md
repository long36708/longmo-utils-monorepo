[@longmo-utils/common](../index.md) / sortTree

# Function: sortTree()

```ts
function sortTree<T>(
   treeData, 
   sortFunction, 
   options?): T[];
```

对树形结构数据进行递归排序

对树形结构的每一层节点应用排序函数，保持层级结构

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Record`\<`string`, `any`\> | 树节点类型，必须是对象类型 |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `treeData` | `T`[] | 树形数据数组 |
| `sortFunction` | (`a`, `b`) => `number` | 排序函数，用于定义排序规则 |
| `options?` | [`TreeConfigOptions`](../interfaces/TreeConfigOptions.md) | 配置选项 |

## Returns

`T`[]

排序后的树形数据

## Examples

```typescript
const tree = [
  { id: 3, name: 'C', children: [{ id: 5, name: 'E' }] },
  { id: 1, name: 'A', children: [{ id: 4, name: 'D' }, { id: 2, name: 'B' }] }
];

const result = sortTree(tree, (a, b) => a.id - b.id);
console.log(result);
// [
//   { id: 1, name: 'A', children: [
//     { id: 2, name: 'B' },
//     { id: 4, name: 'D' }
//   ]},
//   { id: 3, name: 'C', children: [{ id: 5, name: 'E' }] }
// ]
```

```typescript
const tree = [
  { name: 'Zebra', children: [{ name: 'Y' }] },
  { name: 'Apple', children: [{ name: 'Beta' }] }
];

const result = sortTree(tree, (a, b) => a.name.localeCompare(b.name));
console.log(result);
// [
//   { name: 'Apple', children: [{ name: 'Beta' }] },
//   { name: 'Zebra', children: [{ name: 'Y' }] }
// ]
```

```typescript
const tree = [
  { priority: 2, tasks: [{ priority: 3 }] },
  { priority: 1, tasks: [{ priority: 2 }] }
];

const result = sortTree(
  tree,
  (a, b) => a.priority - b.priority,
  { childProps: 'tasks' }
);
```
