
import { formatMoney } from '../../src/accountant/formatMoney'

describe('formatMoney', () => {
  it('formatMoney(0); returns 0.00', () => {
    expect(formatMoney(0)).toBe('0.00')
  })
  it('formatMoney(1); returns 1.00', () => {
    expect(formatMoney(1)).toBe('1.00')
  })
  it('formatMoney(18799.895993); returns 18,799.90', () => {
    expect(formatMoney(18799.895993)).toBe('18,799.90')
  })
  it(`formatMoney(199.86, '$ 0.00'); returns ¥ 1,999.86`, () => {
    expect(formatMoney(1999.86, '$ 0,0.00')).toBe('¥ 1,999.86')
  })
})
