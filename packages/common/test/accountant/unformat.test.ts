import { unformat } from '../../src/accountant/unformat'

describe('unformat', () => {
  it('unformat("￥1,977.34"); returns 1977.34', () => {
    expect(unformat('￥1,977.34')).toBe(1977.34)
  })
  it('unformat("34.22%"); returns 0.3422', () => {
    expect(unformat('34.22%')).toBe(0.3422)
  })
  it('unformat("183,939.09"); returns 183,939.09', () => {
    expect(unformat('183,939.09')).toBe(183939.09)
  })
  it('unformat("qwwww"); returns null', () => {
    expect(unformat('qwwww')).toBeNull()
  })
})
