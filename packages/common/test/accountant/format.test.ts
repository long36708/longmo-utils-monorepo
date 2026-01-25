import { format } from '../../src/accountant/format'

describe('format', () => {
  it('format(0); returns 0', () => {
    expect(format(0)).toBe('0')
  })
  it('format(22, "0,0.00"); returns 22.00', () => {
    expect(format(22, '0,0.00')).toBe('22.00')
  })
  it('format(1123.232); returns 1123', () => {
    expect(format(1123.232)).toBe('1,123')
  })
})
