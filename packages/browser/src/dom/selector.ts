/**
 * 选择器工具模块
 * 提供 DOM 元素选择功能
 */

/**
 * 通过 CSS 选择器获取单个 DOM 元素
 *
 * @param selector - CSS 选择器字符串 (例如 '.class', '#id', 'div > p')
 * @returns 第一个匹配的 DOM 元素,如果未找到则返回 null
 *
 * @example 基础选择器
 * ```typescript
 * const header = $('header');
 * const nav = $('nav');
 * const footer = $('footer');
 * ```
 *
 * @example 类选择器和 ID 选择器
 * ```typescript
 * const activeItem = $('.menu-item.active');
 * const submitButton = $('#submit-btn');
 * const firstCard = $('.card:first-child');
 * ```
 *
 * @example 属性选择器和后代选择器
 * ```typescript
 * const inputText = $('input[type="text"]');
 * const navLink = $('nav a.external');
 * const checkedCheckbox = $('input[type="checkbox"]:checked');
 * ```
 *
 * @example 空值检查
 * ```typescript
 * const element = $('header');
 * if (element) {
 *   console.log(element.textContent);
 * }
 * ```
 */
export function $(selector: string): HTMLElement | null {
  return document.querySelector(selector)
}

/**
 * 通过 CSS 选择器获取所有匹配的 DOM 元素
 *
 * @param selector - CSS 选择器字符串 (例如 '.class', '#id', 'div > p')
 * @returns 匹配的 DOM 元素数组
 *
 * @example 收集元素
 * ```typescript
 * const buttons = $$('button');
 * const links = $$('.nav a');
 * const inputs = $$('input');
 * ```
 *
 * @example 遍历元素
 * ```typescript
 * const cards = $$('.card');
 * cards.forEach(card => {
 *   card.style.opacity = '0.8';
 * });
 * ```
 *
 * @example 过滤和处理元素
 * ```typescript
 * const images = $$('img');
 * const largeImages = images.filter(img => {
 *   const width = parseInt(img.getAttribute('width') || '0');
 *   return width > 300;
 * });
 * ```
 *
 * @example 多选择器组合
 * ```typescript
 * const focusableElements = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
 * ```
 */
export function $$(selector: string): HTMLElement[] {
  return Array.from(document.querySelectorAll(selector))
}
