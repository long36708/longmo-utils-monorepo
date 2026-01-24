[@longmo-utils/browser](../index.md) / isInViewport

# Function: isInViewport()

```ts
function isInViewport(element): boolean;
```

检查元素是否完全可见于视口中

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | 要检查的 DOM 元素 |

## Returns

`boolean`

如果元素在视口中完全可见则返回 true,否则返回 false

## Examples

```typescript
const footer = $('footer');
if (isInViewport(footer)) {
  console.log('Footer is visible');
}
```

```typescript
const images = $$('img[data-src]');

function loadVisibleImages() {
  images.forEach(img => {
    if (isInViewport(img) && !img.src) {
      img.src = img.dataset.src;
      delete img.dataset.src;
    }
  });
}

window.addEventListener('scroll', loadVisibleImages);
window.addEventListener('load', loadVisibleImages);
```

```typescript
const sentinel = $('.sentinel');

function loadMoreContent() {
  if (sentinel && isInViewport(sentinel)) {
    console.log('Load more content...');
    // 获取并追加新内容
  }
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(loadMoreContent);
});
```

```typescript
const sections = $$('section[data-track]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      const trackId = section.dataset.track;
      console.log('Section viewed:', trackId);
      // 发送统计事件
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  if (isInViewport(section)) {
    const trackId = section.dataset.track;
    console.log('Initial view:', trackId);
  }
  observer.observe(section);
});
```
