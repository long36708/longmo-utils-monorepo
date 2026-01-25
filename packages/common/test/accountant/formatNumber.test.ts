
import { formatNumber } from '../../src/accountant/formatNumber'

describe('formatNumber', () => {
  it('formatNumber(0); returns 0.00', () => {
    expect(formatNumber(0)).toBe('0')
  })
  it('formatNumber(1); returns 1.00', () => {
    expect(formatNumber(1)).toBe('1')
  })
  it('formatNumber(18799.895993); returns 18,799.90', () => {
    expect(formatNumber(18799.895993)).toBe('18,799.90')
  })
})
