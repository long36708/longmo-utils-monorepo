import {describe, expect, it} from 'vitest'
import { isEmptyObject } from '../../src/util/isEmptyObject'
describe('isEmptyObject', () => {
  it('isEmptyObject({}) return true', () => {
    expect(isEmptyObject({})).toBeTruthy()
  })
  it('isEmptyObject([]) return true', () => {
    expect(isEmptyObject([])).toBeTruthy()
  })
  it('isEmptyObject([1]) return false', () => {
    expect(isEmptyObject([1])).toBeFalsy()
  })
  it('isEmptyObject("") return true', () => {
    expect(isEmptyObject("")).toBeTruthy()
  })
  it('isEmptyObject(undefined) return true', () => {
    expect(isEmptyObject(undefined)).toBeTruthy()
  })
  it('isEmptyObject(1) return true', () => {
    expect(isEmptyObject(1)).toBeTruthy()
  })
});
