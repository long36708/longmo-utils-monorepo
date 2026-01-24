/**
 * 样式操作工具模块
 * 提供 DOM 元素的样式读写功能
 */

/**
 * 获取元素指定 CSS 属性的计算值
 *
 * @param element - 要获取样式的 DOM 元素
 * @param property - CSS 属性名 (例如 'color', 'font-size')
 * @returns CSS 属性的计算值
 *
 * @example 基础样式获取
 * ```typescript
 * const header = $('header');
 * const bgColor = getStyle(header, 'background-color');
 * const fontSize = getStyle(header, 'font-size');
 * const color = getStyle(header, 'color');
 * ```
 *
 * @example 响应式设计检查
 * ```typescript
 * const element = $('.responsive-element');
 * if (element) {
 *   const display = getStyle(element, 'display');
 *   const isVisible = display !== 'none';
 *
 *   if (isVisible) {
 *     const width = getStyle(element, 'width');
 *     console.log('Element width:', width);
 *   }
 * }
 * ```
 *
 * @example 比较和逻辑判断
 * ```typescript
 * const header = $('header');
 * const footer = $('footer');
 *
 * if (header && footer) {
 *   const headerHeight = parseInt(getStyle(header, 'height'));
 *   const footerHeight = parseInt(getStyle(footer, 'height'));
 *
 *   if (headerHeight > footerHeight) {
 *     console.log('Header is taller than footer');
 *   }
 * }
 * ```
 *
 * @example 颜色处理
 * ```typescript
 * const button = $('button');
 * if (button) {
 *   const bgColor = getStyle(button, 'background-color');
 *   const textColor = getStyle(button, 'color');
 *
 *   // 转换为 RGB 并调整亮度
 *   const rgb = bgColor.match(/\d+/g);
 *   if (rgb) {
 *     const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
 *     const shouldUseLightText = brightness < 128;
 *   }
 * }
 * ```
 */
export function getStyle(element: HTMLElement, property: string): string {
  return window.getComputedStyle(element).getPropertyValue(property)
}

/**
 * 为元素设置多个 CSS 属性
 *
 * @param element - 要应用样式的 DOM 元素
 * @param styles - CSS 属性键值对对象
 *
 * @example 基础样式设置
 * ```typescript
 * const header = $('header');
 * setStyle(header, {
 *   'color': '#333',
 *   'font-size': '16px',
 *   'background-color': '#f5f5f5'
 * });
 * ```
 *
 * @example 动画和过渡效果
 * ```typescript
 * const modal = $('.modal');
 * if (modal) {
 *   setStyle(modal, {
 *     'opacity': '0',
 *     'transform': 'translateY(-20px)',
 *     'transition': 'opacity 0.3s ease, transform 0.3s ease'
 *   });
 *
 *   setTimeout(() => {
 *     setStyle(modal, {
 *       'opacity': '1',
 *       'transform': 'translateY(0)'
 *     });
 *   }, 100);
 * }
 * ```
 *
 * @example 响应式和动态样式
 * ```typescript
 * const card = $('.card');
 * if (card) {
 *   const isDark = document.documentElement.classList.contains('dark');
 *   setStyle(card, {
 *     'background-color': isDark ? '#1f2937' : '#ffffff',
 *     'color': isDark ? '#f9fafb' : '#111827',
 *     'box-shadow': isDark ? '0 4px 6px rgba(0, 0, 0, 0.5)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
 *   });
 * }
 * ```
 *
 * @example 动态定位
 * ```typescript
 * const tooltip = $('.tooltip');
 * const trigger = $('.trigger');
 *
 * if (tooltip && trigger) {
 *   const triggerRect = trigger.getBoundingClientRect();
 *   setStyle(tooltip, {
 *     'position': 'absolute',
 *     'top': `${triggerRect.bottom + 10}px`,
 *     'left': `${triggerRect.left}px`,
 *     'z-index': '1000'
 *   });
 * }
 * ```
 */
export function setStyle(element: HTMLElement, styles: Record<string, string>): void {
  for (const [property, value] of Object.entries(styles)) {
    element.style.setProperty(property, value)
  }
}
