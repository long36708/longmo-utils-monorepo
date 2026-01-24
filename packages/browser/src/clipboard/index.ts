import copy from 'copy-text-to-clipboard'

interface optionsType {
  target: HTMLElement
}

/**
 * 复制文本到剪贴板
 * @param text - 需要复制到剪贴板的文本
 * @param options - target: HTMLElement
 * @returns 是否复制成功（Boolean）
 * @example
 * ```ts
 * copyToClipboard('复制')                                                                     // true
 * copyToClipboard('指定临时创建的 dom 存放处', { target: document.querySelector('#text') })      // true
 * ```
 * @public
 */
export function copyToClipboard(text: string, options?: optionsType): boolean {
  return copy(text, options)
}
