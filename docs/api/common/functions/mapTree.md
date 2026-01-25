[@longmo-utils/common](../index.md) / mapTree

# Function: mapTree()

```ts
function mapTree<T, V>(
   tree, 
   mapper, 
   options?): V[];
```

根据条件重新映射给定树结构的节点

对树形结构的每个节点应用映射函数，生成新的树形结构

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | 源树节点类型 |
| `V` *extends* `Record`\<`string`, `any`\> | 目标树节点类型，必须是对象类型 |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tree` | `T`[] | 要映射的树结构的根节点数组 |
| `mapper` | (`node`) => `V` | 用于映射每个节点的函数 |
| `options?` | [`TreeConfigOptions`](../interfaces/TreeConfigOptions.md) | 配置选项 |

## Returns

`V`[]

映射后的树形结构数组

## Examples

```typescript
const tree = [
  { id: 1, name: 'A', children: [{ id: 2, name: 'A-1' }] }
];

const result = mapTree(tree, node => ({
  ...node,
  label: `${node.name} (${node.id})`
}));
console.log(result);
// [
//   { id: 1, name: 'A', label: 'A (1)', children: [
//     { id: 2, name: 'A-1', label: 'A-1 (2)' }
//   ]}
// ]
```

```typescript
const tree = [
  { value: 'a', children: [{ value: 'a-1' }] }
];

const result = mapTree(tree, node => ({
  text: node.value,
  checked: false
}));
console.log(result);
// [
//   { text: 'a', checked: false, children: [{ text: 'a-1', checked: false }] }
// ]
```

```typescript
const tree = [
  { id: 1, items: [{ id: 2 }] }
];

const result = mapTree(
  tree,
  node => ({ ...node, mapped: true }),
  { childProps: 'items' }
);
```
