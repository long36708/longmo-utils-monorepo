/**
 * 类名操作工具模块
 * 提供 DOM 元素的类名增删改功能
 * 底层的 classList.add() 方法原生支持两种方式：
 * 接受多个独立的字符串参数
 * 接受一个包含空格分隔的字符串（会自动拆分）
 *
 * 虽然当前实现两种方式都能工作，但从代码清晰度和TypeScript 类型安全的角度考虑：
 * 推荐的用法是使用多个独立参数：
 * ```typescript
 * addClass(element, 'class1', 'class2');
 * ```
 * 原因是：
 *
 * 当前函数签名使用的是剩余参数 ...classNames: string[]，设计意图就是接收多个独立字符串
 * 独立参数的方式在 TypeScript 中有更好的类型提示和智能感知
 * 代码意图更明确，便于阅读和维护
 *
 * 因为底层调用的是浏览器原生的 classList.add() 方法，该方法具有以下特性：
 * 如果类名已存在，不会重复添加
 * 即使你多次传入相同的类名，DOM 中最终只会保留一个
 *
 * 说明哪些情况下的元素/对象没有 classList 属性
 * 1. 基本节点类型（Node 的子类）: 例如 Text、Comment、Document、Fragment 等
 * 2. SVG 元素 : SVG 元素不是 HTMLElement，而是 SVGElement，早期浏览器可能不支持 classList
 * 3. 非元素节点: 例如 Text、Comment、Document、DocumentFragment 等
 * 4. 全局对象: 例如 window、document 等
 * 5. 自定义或非标准对象
 *
 * 完整的继承关系图
 * Node (没有 classList)
 * ├── Document (没有 classList)
 * ├── DocumentFragment (没有 classList)
 * ├── CharacterData (没有 classList)
 * │   ├── Text (没有 classList)
 * │   └── Comment (没有 classList)
 * └── Element (有 classList - 在现代浏览器中)
 *     ├── HTMLElement (有 classList)
 *     │   ├── HTMLDivElement
 *     │   ├── HTMLButtonElement
 *     │   └── ...
 *     └── SVGElement (有 classList - 现代浏览器)
 */

/**
 * 向元素添加一个或多个 CSS 类
 *
 * @param element - 要添加类的 DOM 元素
 * @param classNames - 一个或多个要添加的类名
 *
 * @example 添加单个或多个类
 * ```typescript
 * const button = $('button');
 * addClass(button, 'active');
 * addClass(button, 'highlight', 'primary');
 * ```
 *
 * @example 动态添加类
 * ```typescript
 * const card = $('.card');
 * if (card) {
 *   const isFeatured = card.dataset.featured === 'true';
 *   if (isFeatured) {
 *     addClass(card, 'featured', 'highlight');
 *   }
 * }
 * ```
 *
 * @example 批量处理元素
 * ```typescript
 * const buttons = $$('button');
 * buttons.forEach(button => {
 *   addClass(button, 'btn', 'btn-primary');
 * });
 * ```
 *
 * @example 条件样式
 * ```typescript
 * const alerts = $$('.alert');
 * alerts.forEach(alert => {
 *   const type = alert.dataset.type;
 *   if (type === 'error') addClass(alert, 'alert-error');
 *   if (type === 'warning') addClass(alert, 'alert-warning');
 *   if (type === 'success') addClass(alert, 'alert-success');
 * });
 * ```
 */
export function addClass(element: HTMLElement, ...classNames: string[]): void {
  element.classList.add(...classNames)
}

/**
 * 从元素中移除一个或多个 CSS 类
 *
 * @param element - 要移除类的 DOM 元素
 * @param classNames - 一个或多个要移除的类名
 *
 * @example 移除单个或多个类
 * ```typescript
 * const button = $('button');
 * removeClass(button, 'active');
 * removeClass(button, 'highlight', 'primary');
 * ```
 *
 * @example 重置元素状态
 * ```typescript
 * const modal = $('.modal');
 * if (modal) {
 *   removeClass(modal, 'open', 'visible');
 *   addClass(modal, 'closed');
 * }
 * ```
 *
 * @example 基于切换的移除
 * ```typescript
 * const menu = $('.menu');
 * if (menu) {
 *   if (menu.classList.contains('active')) {
 *     removeClass(menu, 'active');
 *   }
 * }
 * ```
 *
 * @example 清理动态类
 * ```typescript
 * const container = $('.container');
 * if (container) {
 *   // 移除所有工具类
 *   removeClass(container, 'mt-2', 'mb-4', 'p-4', 'bg-gray-100');
 *   // 保留基础类
 *   addClass(container, 'base-style');
 * }
 * ```
 */
export function removeClass(element: HTMLElement, ...classNames: string[]): void {
  element.classList.remove(...classNames)
}

/**
 * 切换元素的 CSS 类(存在则移除,不存在则添加)
 *
 * @param element - 要切换类的 DOM 元素
 * @param className - 要切换的类名
 * @returns 如果类被添加则返回 true,如果被移除则返回 false
 *
 * @example 简单切换
 * ```typescript
 * const button = $('button');
 * const isActive = toggleClass(button, 'active');
 * console.log('Active:', isActive); // 添加时为 true,移除时为 false
 * ```
 *
 * @example 事件处理器切换
 * ```typescript
 * const menuToggle = $('#menu-toggle');
 * const menu = $('#menu');
 *
 * menuToggle?.addEventListener('click', () => {
 *   if (menu) {
 *     const isOpen = toggleClass(menu, 'open');
 *     if (isOpen) {
 *       addClass(menuToggle, 'active');
 *     } else {
 *       removeClass(menuToggle, 'active');
 *     }
 *   }
 * });
 * ```
 *
 * @example 表单验证反馈
 * ```typescript
 * const emailInput = $('input[type="email"]');
 *
 * emailInput?.addEventListener('input', () => {
 *   const isValid = emailInput.value.includes('@');
 *   toggleClass(emailInput, 'valid', isValid);
 *   toggleClass(emailInput, 'invalid', !isValid);
 * });
 * ```
 *
 * @example 多元素切换
 * ```typescript
 * const buttons = $$('.tab-button');
 * const panels = $$('.tab-panel');
 *
 * buttons.forEach((button, index) => {
 *   button.addEventListener('click', () => {
 *     // 切换按钮的激活状态
 *     buttons.forEach(btn => removeClass(btn, 'active'));
 *     addClass(button, 'active');
 *
 *     // 切换面板的可见性
 *     panels.forEach((panel, i) => {
 *       toggleClass(panel, 'active', i === index);
 *     });
 *   });
 * });
 * ```
 */
export function toggleClass(element: HTMLElement, className: string): boolean {
  return element.classList.toggle(className)
}
