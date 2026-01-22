[@longmo-utils/node](../index.md) / readFileOrDefault

# Function: readFileOrDefault()

```ts
function readFileOrDefault<T>(filePath, defaultValue): Promise<T>;
```

Reads a file if it exists, returns default value if it doesn't

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `filePath` | `string` |
| `defaultValue` | `T` |

## Returns

`Promise`\<`T`\>
