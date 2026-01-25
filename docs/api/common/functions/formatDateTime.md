[@longmo-utils/common](../index.md) / formatDateTime

# Function: formatDateTime()

```ts
function formatDateTime(time?): string;
```

格式化日期时间

将日期格式化为完整的日期时间字符串（YYYY-MM-DD HH:mm:ss）

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `time?` | [`FormatDate`](../type-aliases/FormatDate.md) | 日期值，可以是 Date 对象、dayjs 对象、时间戳或字符串 |

## Returns

`string`

格式化后的日期时间字符串

## Examples

```typescript
formatDateTime(); // '2024-01-25 14:30:00'
```

```typescript
formatDateTime(new Date(2024, 0, 25, 14, 30, 0)); // '2024-01-25 14:30:00'
```

```typescript
formatDateTime(1706161800000); // '2024-01-25 14:30:00'
```

```typescript
formatDateTime('2024-01-25T06:30:00Z'); // '2024-01-25 14:30:00'
```
