[@longmo-utils/common](../index.md) / setCurrentTimezone

# Function: setCurrentTimezone()

```ts
function setCurrentTimezone(timezone?): void;
```

设置默认时区

设置后续所有日期操作使用的时区

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timezone?` | `string` | 时区字符串，如果为空则使用系统时区 |

## Returns

`void`

## Examples

```typescript
setCurrentTimezone('Asia/Shanghai');
```

```typescript
setCurrentTimezone('UTC');
```

```typescript
setCurrentTimezone();
```
