import {_decode} from './querystringify'

/**
 * 解析URL查询字符串，转换成JSON格式
 *
 * @param query - 查询字符串，可以是?开头也可以是#号开头
 * @returns 解析为对象
 * @example
 * ```ts
 * parseQueryString('?foo=bar');         // { foo: 'bar' }
 * parseQueryString('#foo=bar');         // { foo: 'bar' }
 * parseQueryString('foo=bar');          // { foo: 'bar' }
 * parseQueryString('foo=bar&bar=foo');  // { foo: 'bar', bar: 'foo' }
 * parseQueryString('foo&bar=foo');      // { foo: '', bar: 'foo' }
 * ```
 *
 * @public
 */
export function parseQueryString(query: string): Record<string, string | undefined> {
  if (!query) {
    return {}
  }
  let parser = /([^=?#&]+)=?([^&]*)/g,
    result = {},
    part
  while ((part = parser.exec(query))) {
    let key = _decode(part[1]),
      value: string | null | undefined = _decode(part[2])
    if (key === null) {
      continue
    }

    if (value === null) {
      value = undefined
    }

    // @ts-ignore
    result[key] = value
  }
  return result
}
