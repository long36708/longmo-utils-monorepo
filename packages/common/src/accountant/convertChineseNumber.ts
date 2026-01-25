/**
 * 阿拉伯数字转中文数字
 * @param num 需要转换的数字
 * @returns 返回转换后的中文字符串
 * @example
 * ```ts
 * convertChineseNumber(0); // 零
 * convertChineseNumber(1); // 一
 * convertChineseNumber(10); // 十
 * convertChineseNumber(11); // 十一
 * convertChineseNumber(11.12); // 十一点一二
 * convertChineseNumber(100); // 一百
 * convertChineseNumber(123); // 一百二十三
 * ```
 * @public
 */
export function convertChineseNumber (num: number): string {
  // 处理 -0 +0 的情况
  if (num === 0) {
    return '零';
  }
  const AA: string[] = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  const BB: string[] = ["", "十", "百", "千", "万", "亿", "点", ""];
  const a: string[] = ("" + num).replace(/(^0*)/g, "").split(".");
  let k = 0;
  let re = "";
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
          .test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) !== '0' && a[0].charAt(i + 1) === '0')
      re = AA[0] + re;
    if (a[0].charAt(i) !== '0')
      re = AA[Number(a[0].charAt(i))] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) // 加上小数部分(如果有小数部分)
  {
    re += BB[6];
    for (let i = 0; i < a[1].length; i++)
      re += AA[Number(a[1].charAt(i))];
  }
  if (re == '一十')
    re = "十";
  if (re.match(/^一/) && re.length == 3)
    re = re.replace("一", "");
  return re;
}
