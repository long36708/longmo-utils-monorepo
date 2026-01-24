/**
 * 视口和滚动工具模块
 * 提供元素可视性检查和滚动控制功能
 */

/**
 * 检查元素是否完全可见于视口中
 *
 * @param element - 要检查的 DOM 元素
 * @returns 如果元素在视口中完全可见则返回 true,否则返回 false
 *
 * @example 基础可见性检查
 * ```typescript
 * const footer = $('footer');
 * if (isInViewport(footer)) {
 *   console.log('Footer is visible');
 * }
 * ```
 *
 * @example 懒加载内容
 * ```typescript
 * const images = $$('img[data-src]');
 *
 * function loadVisibleImages() {
 *   images.forEach(img => {
 *     if (isInViewport(img) && !img.src) {
 *       img.src = img.dataset.src;
 *       delete img.dataset.src;
 *     }
 *   });
 * }
 *
 * window.addEventListener('scroll', loadVisibleImages);
 * window.addEventListener('load', loadVisibleImages);
 * ```
 *
 * @example 无限滚动
 * ```typescript
 * const sentinel = $('.sentinel');
 *
 * function loadMoreContent() {
 *   if (sentinel && isInViewport(sentinel)) {
 *     console.log('Load more content...');
 *     // 获取并追加新内容
 *   }
 * }
 *
 * window.addEventListener('scroll', () => {
 *   requestAnimationFrame(loadMoreContent);
 * });
 * ```
 *
 * @example 统计和跟踪
 * ```typescript
 * const sections = $$('section[data-track]');
 *
 * const observer = new IntersectionObserver((entries) => {
 *   entries.forEach(entry => {
 *     if (entry.isIntersecting) {
 *       const section = entry.target;
 *       const trackId = section.dataset.track;
 *       console.log('Section viewed:', trackId);
 *       // 发送统计事件
 *     }
 *   });
 * }, { threshold: 0.5 });
 *
 * sections.forEach(section => {
 *   if (isInViewport(section)) {
 *     const trackId = section.dataset.track;
 *     console.log('Initial view:', trackId);
 *   }
 *   observer.observe(section);
 * });
 * ```
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * 将指定元素滚动到浏览器窗口的可见区域
 *
 * @param element - 要滚动到可见区域的 DOM 元素
 * @param options - 可选的滚动行为选项 (默认为平滑滚动)
 *
 * @example 基础滚动
 * ```typescript
 * const section = $('section');
 * scrollIntoView(section);
 * ```
 *
 * @example 不同的滚动位置
 * ```typescript
 * const section = $('section');
 * scrollIntoView(section);
 *
 * // 滚动到顶部
 * scrollIntoView(section, { block: 'start' });
 *
 * // 滚动到中间
 * scrollIntoView(section, { block: 'center' });
 *
 * // 滚动到底部
 * scrollIntoView(section, { block: 'end' });
 * ```
 *
 * @example 导航和锚点链接
 * ```typescript
 * const navLinks = $$('.nav a');
 *
 * navLinks.forEach(link => {
 *   link.addEventListener('click', (e) => {
 *     e.preventDefault();
 *     const targetId = link.getAttribute('href');
 *     const target = $(targetId);
 *     if (target) {
 *       scrollIntoView(target, { block: 'start' });
 *     }
 *   });
 * });
 * ```
 *
 * @example 表单验证反馈
 * ```typescript
 * const form = $('form');
 * const submitButton = $('button[type="submit"]');
 *
 * form?.addEventListener('submit', (e) => {
 *   e.preventDefault();
 *
 *   const invalidInputs = $$('input:invalid');
 *   if (invalidInputs.length > 0) {
 *     // 滚动到第一个无效输入框
 *     scrollIntoView(invalidInputs[0], { block: 'center' });
 *
 *     // 添加错误高亮
 *     invalidInputs.forEach(input => {
 *       addClass(input, 'error');
 *     });
 *   }
 * });
 * ```
 *
 * @example 目录导航
 * ```typescript
 * const tocLinks = $$('.toc a');
 *
 * tocLinks.forEach(link => {
 *   link.addEventListener('click', (e) => {
 *     e.preventDefault();
 *
 *     const targetId = link.getAttribute('href');
 *     const target = $(targetId);
 *     if (target) {
 *       scrollIntoView(target, {
 *         block: 'start',
 *         inline: 'nearest',
 *         behavior: 'smooth'
 *       });
 *     }
 *   });
 * });
 * ```
 */
export function scrollIntoView(element: HTMLElement, options?: ScrollIntoViewOptions): void {
  element.scrollIntoView({ behavior: 'smooth', ...options })
}
