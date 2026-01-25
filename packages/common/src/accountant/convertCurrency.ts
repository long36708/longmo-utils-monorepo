/**
 * 阿拉伯数字对应的汉字
 */
interface CNCharType {
  '$0': string
  '$1': string
  '$2': string
  '$3': string
  '$4': string
  '$5': string
  '$6': string
  '$7': string
  '$8': string
  '$9': string
  '$10': string
  '$100': string
  '$1000': string
  '$10000': string
  '$100000000': string
  'CN_SYMBOL': string
  'DOLLAR': string
  '$0.1': string
  '$0.01': string
  '$0.001': string
  '$0.0001': string
  'INTEGER': string
}

const CN_CHAR: CNCharType = {
  '$0': '\u96F6',
  '$1': '\u58F9',
  '$2': '\u8D30',
  '$3': '\u53C1',
  '$4': '\u8086',
  '$5': '\u4F0D',
  '$6': '\u9646',
  '$7': '\u67D2',
  '$8': '\u634C',
  '$9': '\u7396',
  '$10': '\u62FE',
  '$100': '\u4F70',
  '$1000': '\u4EDF',
  '$10000': '\u4E07',
  '$100000000': '\u4EBF',
  'CN_SYMBOL': '\u4EBA\u6C11\u5E01',
  'DOLLAR': '\u5143',
  '$0.1': '\u89D2',
  '$0.01': '\u5206',
  '$0.001': '\u6BEB',
  '$0.0001': '\u5398',
  'INTEGER': '\u6574'
}

/**
 * 阿拉伯数字换成汉字大写金额
 * @remarks
 * ```
 * 小数点最多支持到4位单位厘
 * 金额最大支持1万亿
 * ```
 * @param currencyDigits - 转换的金额字符串或数字
 * @param prefixSymbol - 前缀默认false（true=人民币, false=''）
 * @returns 转换成汉字大写金额格式
 * @example
 * ```ts
 * convertCurrency(0); // 零圆整
 * convertCurrency(1234) // 壹仟贰佰叁拾肆圆整
 * convertCurrency('9877662.090') // 玖佰捌拾柒万柒仟陆佰陆拾贰圆零角玖分
 * convertCurrency('9877662.097866') // 玖佰捌拾柒万柒仟陆佰陆拾贰圆零角玖分柒毫捌厘
 * convertCurrency('4231234.04', true)) // 人民币肆佰贰拾叁万壹仟贰佰叁拾肆圆零角肆分
 * ```
 * @public
 */
export function convertCurrency(currencyDigits: number | string, prefixSymbol = false): string {
  // Constants:
  // const MAXIMUM_NUMBER = 999999999999.9999
  const MAXIMUM_INTEGRAL = 999999999999
  // Variables:
  let integral: string // Represent integral part of digit number.
  let decimal: string // Represent decimal part of digit number.
  let outputCharacters: string // The output result.
  let parts: string[]
  let digits: string[], radices: string[], bigRadices: string[], decimals: string[]
  if (isNaN(Number(currencyDigits))) {
    console.warn('金额无效！')
    return ''
  }
  // Validate input string:
  let currencyDigitsStr = currencyDigits.toString()
  if (currencyDigitsStr === '') {
    console.warn('请输入小写金额！')
    return ''
  }
  if (currencyDigitsStr.match(/[^,.\d]/) != null) {
    console.warn('小写金额含有无效字符！')
    return ''
  }
  if (currencyDigitsStr.match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
    console.warn('小写金额的格式不正确！')
    return ''
  }
  // Normalize the format of input digits:
  currencyDigitsStr = currencyDigitsStr.replace(/,/g, '') // Remove comma delimiters.
  currencyDigitsStr = currencyDigitsStr.replace(/^0+/, '') // Trim zeros at the beginning.
  // Assert the number is not greater than the maximum number.
  // if (Number(currencyDigitsStr) > MAXIMUM_NUMBER) {
  //   console.warn('金额过大，应小于1000亿元！')
  //   return ''
  // }
  // Process the coversion from currency digits to characters:
  // Separate integral and decimal parts before processing coversion:
  parts = currencyDigitsStr.split('.')
  if (parts.length > 1) {
    integral = parts[0]
    decimal = parts[1]
    // Cut down redundant decimal digits that are after the second.
    decimal = decimal.substr(0, 4)
  } else {
    integral = parts[0]
    decimal = ''
  }
  if (Number(integral) > MAXIMUM_INTEGRAL) {
    integral = MAXIMUM_INTEGRAL + ''
  }
  // Prepare the characters corresponding to the digits:
  digits = [
    CN_CHAR.$0,
    CN_CHAR.$1,
    CN_CHAR.$2,
    CN_CHAR.$3,
    CN_CHAR.$4,
    CN_CHAR.$5,
    CN_CHAR.$6,
    CN_CHAR.$7,
    CN_CHAR.$8,
    CN_CHAR.$9
  ]
  radices = ['', CN_CHAR.$10, CN_CHAR.$100, CN_CHAR.$1000]
  bigRadices = ['', CN_CHAR.$10000, CN_CHAR.$100000000]
  decimals = [CN_CHAR['$0.1'], CN_CHAR['$0.01'], CN_CHAR['$0.001'], CN_CHAR['$0.0001']]
  // Start processing:
  outputCharacters = ''
  // Process integral part if it is larger than 0:
  if (Number(integral) > 0) {
    let zeroCount = 0
    for (let i = 0; i < integral.length; i++) {
      let p = integral.length - i - 1
      let d = integral.substr(i, 1)
      let quotient = p / 4
      let modulus = p % 4
      if (d == '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          outputCharacters += digits[0]
        }
        zeroCount = 0
        outputCharacters += digits[Number(d)] + radices[modulus]
      }
      if (modulus == 0 && zeroCount < 4) {
        outputCharacters += bigRadices[quotient]
        zeroCount = 0
      }
    }
    outputCharacters += CN_CHAR.DOLLAR
  }
  // Process decimal part if there is:
  // 忽略小数后面的零不转换 0.10 => `1角`,而不是`1角零分`
  decimal = decimal.replace(/0+$/, '')
  if (decimal !== '') {
    for (let i = 0; i < decimal.length; i++) {
      let d = decimal.substr(i, 1)
      // if (d != '0') {
      //   outputCharacters += digits[Number(d)] + decimals[i]
      // }
      outputCharacters += digits[Number(d)] + decimals[i]
    }
  }
  // Confirm and return the final output string:
  if (outputCharacters == '') {
    outputCharacters = CN_CHAR.$0 + CN_CHAR.DOLLAR
  }
  if (decimal == '') {
    outputCharacters += CN_CHAR.INTEGER
  }
  if (prefixSymbol) {
    outputCharacters = CN_CHAR.CN_SYMBOL + outputCharacters
  }
  return outputCharacters
}
