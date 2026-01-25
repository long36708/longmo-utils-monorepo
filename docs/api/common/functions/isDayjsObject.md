[@longmo-utils/common](../index.md) / isDayjsObject

# Function: isDayjsObject()

```ts
function isDayjsObject(value): value is Dayjs;
```

检查值是否为 dayjs 对象

使用 dayjs.isDayjs 方法判断一个值是否为 dayjs 对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | 要检查的值 |

## Returns

`value is Dayjs`

是否为 dayjs 对象

## Examples

```typescript
const date = dayjs();
isDayjsObject(date); // true
```

```typescript
isDayjsObject(new Date()); // false
isDayjsObject('2024-01-25'); // false
isDayjsObject(123456); // false
```

```typescript
function process(value: unknown) {
  if (isDayjsObject(value)) {
    console.log(value.format('YYYY-MM-DD')); // TypeScript 知道 value 是 Dayjs
  }
}
```
