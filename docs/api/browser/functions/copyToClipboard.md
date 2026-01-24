[@longmo-utils/browser](../index.md) / copyToClipboard

# Function: copyToClipboard()

```ts
function copyToClipboard(text, options?): boolean;
```

复制文本到剪贴板

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | 需要复制到剪贴板的文本 |
| `options?` | `optionsType` | target: HTMLElement |

## Returns

`boolean`

是否复制成功（Boolean）

## Example

```ts
copyToClipboard('复制')                                                                     // true
copyToClipboard('指定临时创建的 dom 存放处', { target: document.querySelector('#text') })      // true
```
