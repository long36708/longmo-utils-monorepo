[@longmo-utils/browser](../index.md) / post

# Function: post()

```ts
function post<T>(
   url, 
   data?, 
options?): Promise<T>;
```

Performs an HTTP POST request

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `data?` | `any` |
| `options?` | `RequestInit` |

## Returns

`Promise`\<`T`\>
