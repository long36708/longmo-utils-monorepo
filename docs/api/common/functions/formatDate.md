[@longmo-utils/common](../index.md) / formatDate

# Function: formatDate()

```ts
function formatDate(time?, format?): string;
```

格式化日期

将各种日期格式转换为指定格式的字符串，支持时区转换

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `time?` | [`FormatDate`](../type-aliases/FormatDate.md) | `undefined` | 日期值，可以是 Date 对象、dayjs 对象、时间戳或字符串 |
| `format?` | [`Format`](../type-aliases/Format.md) | `'YYYY-MM-DD'` | 输出格式，默认为 'YYYY-MM-DD' |

## Returns

`string`

格式化后的日期字符串

## Examples

```typescript
formatDate(new Date()); // '2024-01-25'
```

```typescript
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'); // '2024-01-25 14:30:00'
```

```typescript
formatDate(new Date(), 'HH:mm:ss'); // '14:30:00'
```

```typescript
formatDate(1706161800000, 'YYYY-MM-DD'); // '2024-01-25'
```

```typescript
formatDate('2024-01-25T06:30:00Z', 'YYYY-MM-DD HH:mm'); // '2024-01-25 14:30'
```

```typescript
import dayjs from 'dayjs';
const date = dayjs('2024-01-25');
formatDate(date, 'YYYY/MM/DD'); // '2024/01/25'
```
