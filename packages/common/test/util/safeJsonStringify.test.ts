import { safeJsonStringify } from '../../src/string/safeJsonStringify'
import {describe, expect, it} from 'vitest'
describe(`safeJsonStringify`, () => {
    it(`safeJsonStringify({a:1}); // => '{"a":1}'`, () => {
        expect(safeJsonStringify({ a: 1 })).toBe('{"a":1}')
    })
    it(`safeJsonStringify([1,"2"]); // => '[1,"2"]'`, () => {
        expect(safeJsonStringify([1, "2"])).toBe('[1,"2"]')
    })
    it(`safeJsonStringify({}); // => null`, () => {
        expect(safeJsonStringify({})).toBeNull()
    })
    it(`safeJsonStringify([]); // => null`, () => {
        expect(safeJsonStringify([])).toBeNull()
    })
    it(`safeJsonStringify(null); // => null`, () => {
        expect(safeJsonStringify(null)).toBeNull()
    })
    it(`safeJsonStringify(NaN); // => NaN`, () => {
        expect(safeJsonStringify(NaN)).toBeNaN()
    })
    it(`safeJsonStringify("abc"); // => "abc"`, () => {
        expect(safeJsonStringify("abc")).toBe("abc")
    })
})
