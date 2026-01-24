import {describe, expect, it} from 'vitest'
import { isNil } from '../../src/util/isNil'

describe('isNil', () => {
    it(`isNil(undefined); return true `, () => {
        expect(isNil(undefined)).toBeTruthy()
    })
    it(`isNil(void 0); return true `, () => {
        expect(isNil(void 0)).toBeTruthy()
    })
    it(`isNil(NaN); return false `, () => {
        expect(isNil(NaN)).toBeFalsy()
    })
    it(`isNil(null); return true `, () => {
        expect(isNil(null)).toBeTruthy()
    })
    it(`isNil(0); return false `, () => {
        expect(isNil(0)).toBeFalsy()
    })
    it(`isNil(""); return false `, () => {
        expect(isNil("")).toBeFalsy()
    })
    it(`isNil("abc"); return false `, () => {
        expect(isNil("abc")).toBeFalsy()
    })
})
