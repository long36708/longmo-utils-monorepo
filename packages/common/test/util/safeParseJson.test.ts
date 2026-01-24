import { safeParseJson } from '../../src/string/safeParseJson'
import {describe, expect, it} from 'vitest'
describe('safeParseJson', () => {
    it(`safeParseJson('{"name": "abc", age: 20}'); // => {name: "abc", age: 20} `, () => {
        expect(safeParseJson('{"name": "abc", "age": 20}')).toEqual({ name: "abc", age: 20 })
    })
    it(`safeParseJson(0); // => {} `, () => {
        expect(safeParseJson('safeParseJson(0)')).toEqual({})
    })
    it(`safeParseJson('[name=123]', []); // => [] `, () => {
        expect(safeParseJson('[name=123]', [])).toEqual([])
    })
})
