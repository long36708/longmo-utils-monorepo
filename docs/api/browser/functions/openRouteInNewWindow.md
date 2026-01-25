[@longmo-utils/browser](../index.md) / openRouteInNewWindow

# Function: openRouteInNewWindow()

```ts
function openRouteInNewWindow(path): void;
```

在新窗口中打开当前应用的路由

基于当前页面的 origin 和 hash 构建完整的路由地址，然后在新窗口中打开

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | 路由路径 |

## Returns

`void`

## Examples

```typescript
openRouteInNewWindow('/dashboard');
```

```typescript
openRouteInNewWindow('/user/profile?id=123');
```

```typescript
openRouteInNewWindow('settings');
// 等同于 '/settings'
```

```typescript
// 当前 URL: https://example.com/#/home
openRouteInNewWindow('/about');
// 将打开: https://example.com/#/about
```
