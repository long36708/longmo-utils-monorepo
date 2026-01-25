[@longmo-utils/common](../index.md) / isDateInstance

# Function: isDateInstance()

```ts
function isDateInstance(value): value is Date;
```

检查值是否为 Date 实例

使用 instanceof 操作符判断一个值是否为 Date 对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | 要检查的值 |

## Returns

`value is Date`

是否为 Date 实例

## Examples

```typescript
const date = new Date();
isDateInstance(date); // true
```

```typescript
isDateInstance('2024-01-25'); // false
isDateInstance(123456); // false
isDateInstance(null); // false
```

```typescript
function process(value: unknown) {
  if (isDateInstance(value)) {
    console.log(value.getFullYear()); // TypeScript 知道 value 是 Date
  }
}
```
