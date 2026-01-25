[@longmo-utils/browser](../index.md) / StorageManager

# Class: StorageManager

## Constructors

### Constructor

```ts
new StorageManager(__namedParameters): StorageManager;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `StorageManagerOptions` |

#### Returns

`StorageManager`

## Methods

### clear()

```ts
clear(): void;
```

清除所有带前缀的存储项

#### Returns

`void`

***

### clearExpiredItems()

```ts
clearExpiredItems(): void;
```

清除所有过期的存储项

#### Returns

`void`

***

### getItem()

```ts
getItem<T>(key, defaultValue): T | null;
```

获取存储项

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | 键 |
| `defaultValue` | `T` \| `null` | `null` | 当项不存在或已过期时返回的默认值 |

#### Returns

`T` \| `null`

值，如果项已过期或解析错误则返回默认值

***

### removeItem()

```ts
removeItem(key): void;
```

移除存储项

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | 键 |

#### Returns

`void`

***

### setItem()

```ts
setItem<T>(
   key, 
   value, 
   ttl?): void;
```

设置存储项

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | 键 |
| `value` | `T` | 值 |
| `ttl?` | `number` | 存活时间（毫秒） |

#### Returns

`void`
