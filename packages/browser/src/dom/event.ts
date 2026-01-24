/**
 * 事件监听工具模块
 * 提供 DOM 元素的事件绑定、解绑和一次性监听功能
 *
 * 支持的事件目标类型：
 * - HTMLElement: DOM 元素节点
 * - Document: 文档对象
 * - Window: 窗口对象
 *
 * 注意事项：
 * - 使用相同参数多次调用 on() 会添加多个监听器，而不是覆盖
 * - 移除监听器时，参数必须与添加时完全一致（包括 useCapture）
 * - once() 监听器在触发后会自动移除，无需手动解绑
 * - 使用事件对象处理函数时，需要确保 handleEvent 方法正确实现
 */

/**
 * 事件绑定
 * 在指定的元素上绑定事件监听器
 *
 * @param element - 目标元素
 * @param event - 事件名称（如 'click', 'mousedown' 等）
 * @param handler - 事件处理函数
 * @param useCapture - 是否在捕获阶段触发事件，默认为 false（冒泡阶段）
 *
 * @example 基础点击事件
 * ```typescript
 * on(document.body, 'click', () => {
 *   console.log('Body clicked');
 * }, false);
 * ```
 *
 * @example 元素悬停效果
 * ```typescript
 * const button = $('button');
 * on(button, 'mouseenter', () => {
 *   addClass(button, 'hover');
 * });
 * on(button, 'mouseleave', () => {
 *   removeClass(button, 'hover');
 * });
 * ```
 *
 * @example 表单输入监听
 * ```typescript
 * const input = $('input[type="text"]');
 * on(input, 'input', (e) => {
 *   console.log('Input value:', (e.target as HTMLInputElement).value);
 * });
 * ```
 *
 * @example 使用事件对象处理函数
 * ```typescript
 * const handler = {
 *   count: 0,
 *   handleEvent(e: Event) {
 *     this.count++;
 *     console.log(`Event fired ${this.count} times`);
 *   }
 * };
 * on(button, 'click', handler);
 * ```
 *
 * @example 捕获阶段监听
 * ```typescript
 * // 在父元素上使用捕获阶段拦截子元素事件
 * on(container, 'click', (e) => {
 *   console.log('Click captured at container');
 * }, true);
 * ```
 */
export function on(
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
}

/**
 * 事件解绑
 * 移除元素上的事件监听器
 *
 * @param element - 目标元素
 * @param event - 事件名称
 * @param handler - 事件处理函数
 * @param useCapture - 是否为捕获阶段的事件，必须与绑定时一致
 *
 * @example 基础解绑
 * ```typescript
 * const handler = () => console.log('Clicked');
 * on(button, 'click', handler);
 * // ... 某些条件下
 * off(button, 'click', handler);
 * ```
 *
 * @example 组件卸载时清理
 * ```typescript
 * // 在组件挂载时绑定
 * const resizeHandler = () => console.log('Window resized');
 * on(window, 'resize', resizeHandler);
 *
 * // 在组件卸载时清理
 * function cleanup() {
 *   off(window, 'resize', resizeHandler);
 * }
 * ```
 *
 * @example 动态清理多个监听器
 * ```typescript
 * const handlers = {
 *   click: null as (() => void) | null,
 *   scroll: null as (() => void) | null
 * };
 *
 * // 绑定
 * handlers.click = () => console.log('Clicked');
 * handlers.scroll = () => console.log('Scrolled');
 * on(button, 'click', handlers.click);
 * on(window, 'scroll', handlers.scroll);
 *
 * // 清理
 * if (handlers.click) off(button, 'click', handlers.click);
 * if (handlers.scroll) off(window, 'scroll', handlers.scroll);
 * ```
 *
 * @example 捕获阶段事件解绑
 * ```typescript
 * const handler = () => console.log('Captured');
 * on(container, 'click', handler, true);
 * // 移除时必须也传入 true
 * off(container, 'click', handler, true);
 * ```
 */
export function off(
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
}

/**
 * 一次性事件监听
 * 绑定一个只触发一次的事件监听器，触发后自动移除
 *
 * @param element - 目标元素
 * @param event - 事件名称
 * @param handler - 事件处理函数
 * @param useCapture - 是否在捕获阶段触发事件，默认为 false
 *
 * @example 只执行一次的操作
 * ```typescript
 * once(button, 'click', () => {
 *   console.log('This will only log once');
 * });
 * ```
 *
 * @example 页面加载初始化
 * ```typescript
 * once(document, 'DOMContentLoaded', () => {
 *   console.log('DOM fully loaded');
 *   // 执行初始化逻辑
 * });
 * ```
 *
 * @example 首次滚动触发
 * ```typescript
 * once(window, 'scroll', () => {
 *   console.log('User scrolled for the first time');
 *   // 显示提示或记录数据
 * });
 * ```
 *
 * @example 表单首次提交
 * ```typescript
 * once(form, 'submit', (e) => {
 *   e.preventDefault();
 *   console.log('First form submission');
 *   // 特殊处理首次提交
 * });
 * ```
 *
 * @example 资源加载完成后清理
 * ```typescript
 * const image = new Image();
 * once(image, 'load', () => {
 *   console.log('Image loaded successfully');
 *   // 显示图片或触发其他逻辑
 * });
 * image.src = 'path/to/image.jpg';
 * ```
 *
 * @example 与事件对象结合
 * ```typescript
 * const counter = { clicks: 0 };
 * once(button, 'click', (e) => {
 *   counter.clicks++;
 *   console.log(`Clicked at: ${e.timeStamp}`);
 * });
 * ```
 */
export function once(
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (!element || !event || !handler) return;

  const onceHandler: EventListenerOrEventListenerObject = (e: Event) => {
    if (typeof handler === 'function') {
      handler(e);
    } else if (handler.handleEvent) {
      handler.handleEvent(e);
    }
    element.removeEventListener(event, onceHandler, useCapture);
  };

  element.addEventListener(event, onceHandler, useCapture);
}
