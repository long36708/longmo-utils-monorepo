[@longmo-utils/node](../index.md) / exit

# Function: exit()

```ts
function exit(code): never;
```

退出当前进程

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `code` | `number` | `0` | 退出码（默认: 0） |

## Returns

`never`

never

## Example

```ts
exit(0) // 正常退出
exit(1) // 异常退出
```
