import { parseQueryString } from './parseQueryString'

/**
 * urlParse 解析返回类型
 *
 * @public
 */
export interface IURL {
  /**
   * hash字符串
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.hash); // Logs: '#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * ```
   */
  hash?: string
  /**
   * hash的查询字符串对象
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.hashSearchObject);
   * // Logs:   {
   * //   hashfoo: '1',
   * //   hashbar: 'a'
   * // }
   * ```
   */
  hashSearchObject?: Record<string, string | undefined>
  /**
   * host
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.host); // Logs: 'www.baidu.com'
   * ```
   */
  host?: string
  /**
   * hostname
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.hostname); // Logs: 'www.baidu.com'
   * ```
   */
  hostname?: string
  /**
   * href
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.href); // Logs: 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * ```
   */
  href?: string
  /**
   * origin
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.origin); // Logs: 'https://www.baidu.com'
   * ```
   */
  origin?: string
  /**
   * password
   * @example
   * ```
   * const urlStr = 'https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username'
   * const url = urlParse(urlStr)
   * console.log(url.password) // Logs "flabada"
   * ```
   */
  password?: string
  /**
   * pathname
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.pathname); // Logs: '/path1/path2'
   * ```
   */
  pathname?: string
  /**
   * port
   * @example
   * ```
   * const urlStr = 'https://mydomain.com:80/svn/Repos/'
   * const url = urlParse(urlStr)
   * console.log(url.port); // Logs: '80'
   * ```
   */
  port?: string
  /**
   * protocol
   * @example
   * ```
   * const urlStr = 'https://mydomain.com:80/svn/Repos/'
   * const url = urlParse(urlStr)
   * console.log(url.protocol); // Logs: 'https'
   * ```
   */
  protocol?: string
  /**
   * 查询字符串
   * @example
   * ```
   * {
   *  search: "?foo=1&bar=a/"
   * }
   * ```
   */
  search?: string
  /**
   * searchObject
   * @example
   * ```
   * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
   * const url = urlParse(urlStr)
   * console.log(url.pathname); // Logs: '/path1/path2'
   * ```
   */
  searchObject?: Record<string, string | undefined>
  /**
   * origin
   * @example
   * ```
   * const urlStr = 'https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username'
   * const url = urlParse(urlStr)
   * console.log(url.username)
   * // Logs:   {
   * //   foo: '1',
   * //   bar: 'a'
   * // }
   * ```
   */
  username?: string
}

/**
 * url解析，在URL基础上扩展了查询字符串解析对象
 * @param urlString - url格式字符串
 * @returns IURL - 返回URL对象扩展了searchObject和hashSearchObject
 * @example
 * ```ts
 * const urlStr = 'https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a'
 * const url = urlParse(urlStr)
 * {
 *  hash: "#/hashpath1/hashpath2?hashfoo=1&hashbar=a",
 *  hashSearchObject: {
 *    hashfoo: '1',
 *    hashbar: 'a'
 *  }
 *  host: "www.baidu.com"
 *  hostname: "www.baidu.com"
 *  href: "https://www.baidu.com/path1/path2?foo=1&bar=a/#/hashpath1/hashpath2?hashfoo=1&hashbar=a"
 *  origin: "https://www.baidu.com"
 *  password: ""
 *  pathname: "/path1/path2"
 *  port: ""
 *  protocol: "https:"
 *  search: "?foo=1&bar=a/"
 *  searchObject: {
 *    foo: '1',
 *    bar: 'a'
 *  }
 *  username: ""
 * }
 * ```
 *
 * @public
 */
export function urlParse(urlString = ''): IURL {
  try {
    const url = new URL(urlString)
    const parsed: IURL = {}
    for (const key in url) {
      if (key !== 'toString' && key !== 'toJSON' && key !== 'searchParams') {
          // @ts-ignore
        parsed[key] = url[key]
      }
    }
    parsed['searchObject'] = parseQueryString(url.search.replace(/\/$/, ''))
    parsed['hashSearchObject'] = parseQueryString(url.hash.replace(/^#.+\?/, ''))
    return parsed
  } catch (err) {
    return {}
  }
}
