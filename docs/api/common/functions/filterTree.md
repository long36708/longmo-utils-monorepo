[@longmo-utils/common](../index.md) / filterTree

# Function: filterTree()

```ts
function filterTree<T>(
   tree, 
   filter, 
   options?): T[];
```

根据条件过滤给定树结构的节点

保留满足条件的节点及其祖先节点，保持原有的层级结构

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Record`\<`string`, `any`\> | 树节点类型，必须是对象类型 |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tree` | `T`[] | 要过滤的树结构的根节点数组 |
| `filter` | (`node`) => `boolean` | 用于匹配每个节点的条件函数 |
| `options?` | [`TreeConfigOptions`](../interfaces/TreeConfigOptions.md) | 配置选项 |

## Returns

`T`[]

包含所有匹配节点的数组

## Examples

```typescript
const tree = [
  { id: 1, active: true, children: [
    { id: 2, active: false },
    { id: 3, active: true }
  ]},
  { id: 4, active: false }
];

const result = filterTree(tree, node => node.active);
console.log(result);
// [
//   { id: 1, active: true, children: [{ id: 3, active: true }] }
// ]
```

```typescript
const tree = [
  { name: 'A', children: [{ name: 'Apple' }] },
  { name: 'B', children: [{ name: 'Banana' }] }
];

const result = filterTree(tree, node => node.name.includes('A'));
console.log(result);
// [
//   { name: 'A', children: [{ name: 'Apple' }] }
// ]
```

```typescript
const tree = [
  { id: 1, items: [{ id: 2, visible: true }] }
];

const result = filterTree(
  tree,
  node => node.visible,
  { childProps: 'items' }
);
```
