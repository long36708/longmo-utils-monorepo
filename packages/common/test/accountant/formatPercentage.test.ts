import { formatPercentage } from '../../src/accountant/formatPercentage'

describe('formatPercentage', () => {
  it('formatPercentage(0); returns 0.00', () => {
    expect(formatPercentage(0)).toBe('0.00%')
  })
  it('formatPercentage(1); returns 100.00%', () => {
    expect(formatPercentage(1)).toBe('100.00%')
  })
  it('formatPercentage(0.345555); returns 34.56%', () => {
    expect(formatPercentage(0.345555)).toBe('34.56%')
  })
})
