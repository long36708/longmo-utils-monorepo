import { isArray } from "../util/isArray";
import { isEmptyObject } from "../util/isEmptyObject";
import { isObject } from "../util/isObject";

/**
 * 安全的json序列化，只对object和array进行转换，其他原样返回
 * @param value - 待序列化的值
 * @returns 序列化的值
 * @example
 * ```ts
 * safeJsonStringify({a:1}); // => `{"a":1}`
 * safeJsonStringify([1,"2"]); // => `[1,"2"]`
 * safeJsonStringify({}); // => null 空值处理
 * safeJsonStringify([]); // => null 空值处理
 * safeJsonStringify(null); // => null 空值处理
 * safeJsonStringify("abc"); // => "abc" 原样返回
 * safeJsonStringify(123); // => 123  原样返回
 * ```
 */
export function safeJsonStringify (value: any): any {
    if (isObject(value)) {
        return isEmptyObject(value) ? null : JSON.stringify(value)
    } else if (isArray(value)) {
        return isEmptyObject(value) ? null : JSON.stringify(value)
    } else {
        return value
    }
}
