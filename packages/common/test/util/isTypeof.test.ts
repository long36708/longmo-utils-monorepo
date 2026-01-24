import { isTypeOf } from '../../src/util/isTypeOf'
import { isUndefined } from '../../src/util/isUndefined'
import {describe, expect, it} from 'vitest'
describe('isTypeOf', () => {
  it('isTypeof({}) return "object"', () => {
    expect(isTypeOf({})).toBe('object')
  })
  it('isUndefined(undefined) return true', () => {
    expect(isUndefined(undefined)).toBeTruthy()
  })
  let a: any;
  it('isUndefined(a) return true', () => {
    expect(isUndefined(a)).toBeTruthy()
  })
  it('isUndefined(void 0) return true', () => {
    expect(isUndefined(void 0)).toBeTruthy()
  })
});

