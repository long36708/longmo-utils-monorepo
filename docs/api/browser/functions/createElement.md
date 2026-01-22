[@longmo-utils/browser](../index.md) / createElement

# Function: createElement()

```ts
function createElement<K>(
   tag, 
   attributes?, 
   children?): HTMLElementTagNameMap[K];
```

Creates a DOM element

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLElementTagNameMap` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `K` |
| `attributes?` | `Record`\<`string`, `string`\> |
| `children?` | (`string` \| `Node`)[] |

## Returns

`HTMLElementTagNameMap`\[`K`\]
