import { convertChineseNumber } from '../../src/accountant/convertChineseNumber'
import {describe, expect, it} from 'vitest'
describe('convertChineseNumber', () => {
  it('convertChineseNumber(0); return "零"', () => {
    expect(convertChineseNumber(0)).toBe('零')
  })
  it('convertChineseNumber(-0); return "零"', () => {
    expect(convertChineseNumber(0)).toBe('零')
  })
  it('convertChineseNumber(+0); return "零"', () => {
    expect(convertChineseNumber(0)).toBe('零')
  })
  it('convertChineseNumber(1); return "一"', () => {
    expect(convertChineseNumber(1)).toBe('一')
  })
  it('convertChineseNumber(10); return "十"', () => {
    expect(convertChineseNumber(10)).toBe('十')
  })
  it('convertChineseNumber(10.2312); return "十点二三一二"', () => {
    expect(convertChineseNumber(10.2312)).toBe('一十点二三一二')
  })
  it('convertChineseNumber(11); return "十一"', () => {
    expect(convertChineseNumber(11)).toBe('十一')
  })
  it('convertChineseNumber(20); return "二十"', () => {
    expect(convertChineseNumber(20)).toBe('二十')
  })
  it('convertChineseNumber(29); return "二十九"', () => {
    expect(convertChineseNumber(29)).toBe('二十九')
  })
  it('convertChineseNumber(100); return "一百"', () => {
    expect(convertChineseNumber(100)).toBe('一百')
  })
  it('convertChineseNumber(123); return "一百二十三"', () => {
    expect(convertChineseNumber(123)).toBe('一百二十三')
  })
  it('convertChineseNumber(116); return "一百一十六"', () => {
    expect(convertChineseNumber(116)).toBe('一百一十六')
  })
  it('convertChineseNumber(9999999999); return "九十九亿九千九百九十九万九千九百九十九"', () => {
    expect(convertChineseNumber(9999999999)).toBe('九十九亿九千九百九十九万九千九百九十九')
  })
  // it('convertChineseNumber(99999999999999); return ""', () => {
  //   expect(convertChineseNumber(99999999999999)).toBe('')
  // })
});
