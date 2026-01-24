/**
 * 解码一个URI编码的字符串。
 *
 * @param  input - URI编码字符串
 * @returns  解码后的字符串
 * @internal
 */
export function _decode (input: string): string | null {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '))
  } catch (e) {
    return null
  }
}

/**
 * 尝试编码给定输入
 *
 * @param  input - 需要编码的字符串
 * @returns  编码后的字符串
 * @internal
 */
export function _encode (input: string): string | null {
  try {
    return encodeURIComponent(input)
  } catch (e) {
    return null
  }
}

/**
 * querystring转换成对象
 *
 * @param  obj - 需要被转换的查询对象
 * @param  prefix - 添加前缀
 * @returns url查询字符串
 * @example
 * ```ts
 *  querystringify({ foo: bar });       // foo=bar
 *  querystringify({ foo: bar }, '#');  // #foo=bar
 *  querystringify({ foo: '' }, '&');   // &foo=
 * ```
 *
 * @public
 */
export function querystringify (obj: object, prefix = ''): string {
  let pairs: string[] = []
  let value
  let key
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // @ts-ignore
      value = obj[key]
      if (!value && (value === null || value === void 0 || isNaN(value))) {
        value = ''
      }
      key = _encode(key)
      value = _encode(value)
      if (key === null) { continue }
      if (value === null) {
        value = ''
      }
      pairs.push(key + '=' + value)
    }
  }
  return pairs.length ? prefix + pairs.join('&') : ''
}
