/**
 * DOM utilities
 */

/**
 * Gets a DOM element by selector
 */
export function $(selector: string): HTMLElement | null {
  return document.querySelector(selector)
}

/**
 * Gets all DOM elements matching a selector
 */
export function $$(selector: string): HTMLElement[] {
  return Array.from(document.querySelectorAll(selector))
}

/**
 * Creates a DOM element
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

/**
 * Adds a class to an element
 */
export function addClass(element: HTMLElement, ...classNames: string[]): void {
  element.classList.add(...classNames)
}

/**
 * Removes a class from an element
 */
export function removeClass(element: HTMLElement, ...classNames: string[]): void {
  element.classList.remove(...classNames)
}

/**
 * Toggles a class on an element
 */
export function toggleClass(element: HTMLElement, className: string): boolean {
  return element.classList.toggle(className)
}

/**
 * Gets an element's computed style
 */
export function getStyle(element: HTMLElement, property: string): string {
  return window.getComputedStyle(element).getPropertyValue(property)
}

/**
 * Sets an element's style
 */
export function setStyle(element: HTMLElement, styles: Record<string, string>): void {
  for (const [property, value] of Object.entries(styles)) {
    element.style.setProperty(property, value)
  }
}

/**
 * Checks if an element is visible in the viewport
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
 * Scrolls an element into view
 */
export function scrollIntoView(element: HTMLElement, options?: ScrollIntoViewOptions): void {
  element.scrollIntoView({ behavior: 'smooth', ...options })
}
