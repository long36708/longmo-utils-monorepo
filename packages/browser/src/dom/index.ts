/**
 * DOM 工具模块
 * 提供常用的 DOM 操作功能
 */

// 选择器工具
export { $, $$ } from './selector'

// 元素创建工具
export { createElement } from './creation'

// 类名操作工具
export { addClass, removeClass, toggleClass } from './class'

// 样式操作工具
export { getStyle, setStyle } from './style'

// 视口和滚动工具
export { isInViewport, scrollIntoView } from './viewport'

// 事件监听工具
export { on, off, once } from './event'
