/**
 * 元素创建工具模块
 * 提供 DOM 元素创建功能
 */

/**
 * 创建 DOM 元素,可指定属性和子元素
 *
 * @param tag - HTML 标签名 (例如 'div', 'span', 'a')
 * @param attributes - 可选的属性键值对对象
 * @param children - 可选的子元素或文本节点数组
 * @returns 创建的 DOM 元素
 *
 * @example 基础元素创建
 * ```typescript
 * // 创建一个简单的 div
 * const div = createElement('div');
 *
 * // 创建带文本的 span
 * const span = createElement('span', {}, ['Hello, World!']);
 *
 * // 创建图片元素
 * const img = createElement('img', {
 *   src: 'image.jpg',
 *   alt: 'Image description',
 *   width: '200'
 * });
 * ```
 *
 * @example 表单元素
 * ```typescript
 * // 创建输入框
 * const input = createElement('input', {
 *   type: 'text',
 *   placeholder: 'Enter your name',
 *   name: 'username'
 * });
 *
 * // 创建带多个属性的按钮
 * const button = createElement('button', {
 *   id: 'submit',
 *   type: 'submit',
 *   class: 'btn btn-primary',
 *   'data-action': 'submit-form'
 * }, ['Submit']);
 * ```
 *
 * @example 复杂的嵌套结构
 * ```typescript
 * // 创建带头部、主体和底部的卡片
 * const card = createElement('div', { class: 'card' }, [
 *   createElement('div', { class: 'card-header' }, [
 *     createElement('h3', {}, ['Card Title']),
 *     createElement('button', { class: 'close' }, ['×'])
 *   ]),
 *   createElement('div', { class: 'card-body' }, [
 *     createElement('p', {}, ['This is the card content'])
 *   ]),
 *   createElement('div', { class: 'card-footer' }, [
 *     createElement('button', {}, ['Cancel']),
 *     createElement('button', { class: 'primary' }, ['Save'])
 *   ])
 * ]);
 * ```
 *
 * @example 列表和表格
 * ```typescript
 * // 创建无序列表
 * const ul = createElement('ul', {}, [
 *   createElement('li', {}, ['First item']),
 *   createElement('li', {}, ['Second item']),
 *   createElement('li', {}, ['Third item'])
 * ]);
 *
 * // 创建表格行
 * const tr = createElement('tr', {}, [
 *   createElement('td', {}, ['John']),
 *   createElement('td', {}, ['30']),
 *   createElement('td', {}, ['john@example.com'])
 * ]);
 * ```
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes?: Record<string, string>,
  children?: (string | Node)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag)

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value)
    }
  }

  if (children) {
    for (const child of children) {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child))
      } else {
        element.appendChild(child)
      }
    }
  }

  return element
}
