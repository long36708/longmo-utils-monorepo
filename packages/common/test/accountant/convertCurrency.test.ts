import { convertCurrency } from '../../src/accountant/convertCurrency'
import {describe, expect, it} from 'vitest'
describe('convertCurrency', () => {
  // it('convertCurrency(0); return "零元整"', () => {
  //   expect(convertCurrency(0)).toStrictEqual('零元整')
  // })
  // it('convertCurrency(1234); return "壹仟贰佰叁拾肆元整"', () => {
  //   expect(convertCurrency(1234)).toStrictEqual('壹仟贰佰叁拾肆元整')
  // })
  // it(`convertCurrency('1234.00'); return "壹仟贰佰叁拾肆元整"`, () => {
  //   expect(convertCurrency('1234.00')).toStrictEqual('壹仟贰佰叁拾肆元整')
  // })
  // it(`convertCurrency('4231234.04', true)`, () => {
  //   expect(convertCurrency('4231234.04', true)).toStrictEqual('人民币肆佰贰拾叁万壹仟贰佰叁拾肆元零角肆分')
  // })
  // it(`convertCurrency('9877662.090'); return "玖佰捌拾柒万柒仟陆佰陆拾贰元零角玖分"`, () => {
  //   expect(convertCurrency('9877662.090')).toStrictEqual('玖佰捌拾柒万柒仟陆佰陆拾贰元零角玖分')
  // })
  // it(`convertCurrency('9877662.097866'); return "玖佰捌拾柒万柒仟陆佰陆拾贰元零角玖分柒毫捌厘"`, () => {
  //   // console.log(convertCurrency('9877662.097866'))
  //   expect(convertCurrency('9877662.097866')).toStrictEqual('玖佰捌拾柒万柒仟陆佰陆拾贰元零角玖分柒毫捌厘')
  // })
  it(`convertCurrency('999999999999.9999'); return "玖仟玖佰玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元玖角玖分玖毫玖厘"`, () => {
    expect(convertCurrency('9999999999999.9999')).toStrictEqual('玖仟玖佰玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元玖角玖分玖毫玖厘')
  })
})
