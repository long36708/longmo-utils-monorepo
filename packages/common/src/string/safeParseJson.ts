import { isString } from "../util/isString";

export type jsonType = object | Array<any>

/**
 * 安全的JSON字符串解析
 * @param jsonString - 待转换的字符串
 * @param rollback - 转换失败后回退的备选值，默认`{}`
 * @returns JSONObject JSONArray
 * @example
 * ```ts
 * safeParseJson('{"name": "abc", age: 20}'); // => {name: "abc", age: 20} 正常解析
 * safeParseJson(0); // => {} 解析失败默认回退处理
 * safeParseJson(`[name=123]`, []); // => [] 解析失败回退处理
 * ```
 */
export function safeParseJson (jsonString: any, rollback: jsonType = {}): jsonType {
    if (isString(jsonString)) {
        let json: jsonType
        try {
            json = JSON.parse(jsonString)
        } catch (e) {
            json = rollback
        }
        return json
    } else {
        return rollback
    }
}