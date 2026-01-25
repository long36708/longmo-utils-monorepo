import { toFixed } from '../../src/accountant/toFixed'

describe('test toFixed', () => {
  it('toFixed(25.198726354, 0); return "25"', () => {
    expect(toFixed(25.198726354, 0)).toBe('25')
  })
  it('toFixed(25.198726354, 1); return "25.2"', () => {
    expect(toFixed(25.198726354, 1)).toBe('25.2')
  })
  it('toFixed(25.198726354, 2); return "25.20"', () => {
    expect(toFixed(25.198726354, 2)).toBe('25.20')
  })
  it('toFixed(25.198726354, 3); return "25.199"', () => {
    expect(toFixed(25.198726354, 3)).toBe('25.199')
  })
  it('toFixed(25.198726354, 4); return "25.1987"', () => {
    expect(toFixed(25.198726354, 4)).toBe('25.1987')
  })
  it('toFixed(25.198726354, 5); return "25.19873"', () => {
    expect(toFixed(25.198726354, 5)).toBe('25.19873')
  })
  it('toFixed(25.198726354, 6); return "25.198726"', () => {
    expect(toFixed(25.198726354, 6)).toBe('25.198726')
  })
  it('toFixed(25, 2); return "25.00"', () => {
    expect(toFixed(25, 2)).toBe('25.00')
  })
  it('toFixed(25.125, 4); return "25.1250"', () => {
    expect(toFixed(25.125, 4)).toBe('25.1250')
  })
})
