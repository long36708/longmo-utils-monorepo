import { getFormatStr } from '../../src/accountant/getFormatStr'
import {describe, expect, it} from 'vitest'
describe('getFormatStr', () => {
  it('getFormatStr(); returns 0,0', () => {
    expect(getFormatStr()).toBe('0,0')
  })
  it('getFormatStr({ separate: true, point: 2 }); returns 0,0.00', () => {
    expect(getFormatStr({ separate: true, point: 2 })).toBe('0,0.00')
  })
  it('getFormatStr({ separate: false, point: 2 }); returns 0.00', () => {
    expect(getFormatStr({ separate: false, point: 2 })).toBe('0.00')
  })
})
