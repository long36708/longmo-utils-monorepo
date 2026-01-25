# @longmo-utils/common

## Variables

| Variable | Description |
| ------ | ------ |
| [\_version](variables/version.md) | 工具箱版本 |

## Functions

| Function | Description |
| ------ | ------ |
| [getDayjs](functions/getDayjs.md) | 异步获取 Dayjs 实例（已配置中文本地化和季度插件） 这是一个懒加载导入，避免将 dayjs 作为直接依赖 |
| [getDayjsSync](functions/getDayjsSync.md) | 同步获取 Dayjs 实例（仅用于测试环境） 使用 ESM 动态导入，配合 vitest setupFiles 预加载使用 |
| [getNumeral](functions/getNumeral.md) | 异步获取 Numeral 实例（已配置中文本地化） 这是一个懒加载导入，避免将 numeral 作为直接依赖 |
| [getNumeralSync](functions/getNumeralSync.md) | 同步获取 Numeral 实例（仅用于测试环境） 使用 ESM 动态导入，配合 vitest setupFiles 预加载使用 |
| [convertChineseNumber](functions/convertChineseNumber.md) | 阿拉伯数字转中文数字 |
| [convertCurrency](functions/convertCurrency.md) | 阿拉伯数字换成汉字大写金额 |
| [format](functions/format.md) | 通用格式化，需要手动指定格式 |
| [formatMoney](functions/formatMoney.md) | 金额格式化 |
| [formatNumber](functions/formatNumber.md) | 数字格式化 |
| [formatPercentage](functions/formatPercentage.md) | 百分比格式化 |
| [getFormatStr](functions/getFormatStr.md) | 快速生成numeraljs格式字符串, 处理千分位和小数位，可以继续使用format方法进行格式化，小数位处理方式四舍五入 |
| [toFixed](functions/toFixed.md) | 数字格式化，指定需要保留的小数位数，解决部分浏览器兼容性问题，如`(0.615).toFixed(2) === '0.61');` |
| [unformat](functions/unformat.md) | 反格式化，自动识别格式 |
| [chunk](functions/chunk.md) | 将数组拆分成指定大小的子数组 |
| [groupBy](functions/groupBy.md) | 根据键函数对数组元素进行分组 |
| [unique](functions/unique.md) | 数组工具函数 |
| [uniqueByField](functions/uniqueByField.md) | 根据指定字段对对象数组进行去重 |
| [isDarkColor](functions/isDarkColor.md) | - |
| [isLightColor](functions/isLightColor.md) | - |
| [convertToHsl](functions/convertToHsl.md) | 将颜色转换为HSL格式。 |
| [convertToHslCssVar](functions/convertToHslCssVar.md) | 将颜色转换为HSL CSS变量。 |
| [convertToRgb](functions/convertToRgb.md) | 将颜色转换为RGB颜色字符串 TinyColor无法处理hsl内包含'deg'、'grad'、'rad'或'turn'的字符串 比如 hsl(231deg 98% 65%)将被解析为rgb(0, 0, 0) 这里在转换之前先将这些单位去掉 |
| [isValidColor](functions/isValidColor.md) | 检查颜色是否有效 |
| [generatorColorVariables](functions/generatorColorVariables.md) | - |
| [getSystemTimezone](functions/getSystemTimezone.md) | 获取当前时区 |
| [setCurrentTimezone](functions/setCurrentTimezone.md) | 设置默认时区 |
| [getCurrentTimezone](functions/getCurrentTimezone.md) | 获取设置的时区 |
| [formatDate](functions/formatDate.md) | 格式化日期 |
| [formatDateTime](functions/formatDateTime.md) | 格式化日期时间 |
| [isDateInstance](functions/isDateInstance.md) | 检查值是否为 Date 实例 |
| [isDayjsObject](functions/isDayjsObject.md) | 检查值是否为 dayjs 对象 |
| [debounce](functions/debounce.md) | 防抖函数，延迟执行函数 |
| [memoize](functions/memoize.md) | 创建函数的记忆化版本，缓存函数结果 |
| [partial](functions/partial.md) | 创建偏函数，预设部分参数 |
| [throttle](functions/throttle.md) | 节流函数，限制函数执行频率 |
| [deepClone](functions/deepClone.md) | 深度克隆一个对象 |
| [deepEqual](functions/deepEqual.md) | 深度比较两个对象是否相等 |
| [deepMerge](functions/deepMerge.md) | 深度合并多个对象 |
| [get](functions/get.md) | 通过路径字符串获取对象的嵌套值 |
| [set](functions/set.md) | 通过路径字符串设置对象的嵌套值 |
| [camelCase](functions/camelCase.md) | 将字符串转换为驼峰命名 |
| [capitalize](functions/capitalize.md) | 将字符串首字母大写 |
| [isEmpty](functions/isEmpty.md) | 检查字符串是否为空或只包含空白字符 |
| [kebabCase](functions/kebabCase.md) | 将字符串转换为短横线命名 |
| [random](functions/random.md) | 生成指定长度的随机字符串 |
| [safeJsonStringify](functions/safeJsonStringify.md) | 安全的json序列化，只对object和array进行转换，其他原样返回 |
| [safeParseJson](functions/safeParseJson.md) | 安全的JSON字符串解析 |
| [snakeCase](functions/snakeCase.md) | 将字符串转换为下划线命名 |
| [truncate](functions/truncate.md) | 截断字符串到指定长度 |
| [filterTree](functions/filterTree.md) | 根据条件过滤给定树结构的节点 |
| [mapTree](functions/mapTree.md) | 根据条件重新映射给定树结构的节点 |
| [sortTree](functions/sortTree.md) | 对树形结构数据进行递归排序 |
| [traverseTreeValues](functions/traverseTreeValues.md) | 遍历树形结构，并返回所有节点中指定的值 |
| [parseQueryString](functions/parseQueryString.md) | 解析URL查询字符串，转换成JSON格式 |
| [querystringify](functions/querystringify.md) | querystring转换成对象 |
| [urlParse](functions/urlParse.md) | url解析，在URL基础上扩展了查询字符串解析对象 |
| [isArray](functions/isArray.md) | 是否是数组 |
| [isBoolean](functions/isBoolean.md) | 是否是布尔值 |
| [isDate](functions/isDate.md) | 是否是日期对象 |
| [isEmptyObject](functions/isEmptyObject.md) | 是否是空对象 |
| [isError](functions/isError.md) | 是否是错误对象 |
| [isFunction](functions/isFunction.md) | 是否是函数 |
| [isMap](functions/isMap.md) | 是否是Map |
| [isNil](functions/isNil.md) | 检测`value`是否是`null`或`undefined` |
| [isNull](functions/isNull.md) | 是否是null |
| [isNumber](functions/isNumber.md) | 是否是数字 |
| [isObject](functions/isObject.md) | 是否是对象 |
| [isPromise](functions/isPromise.md) | 是否是Promise |
| [isRegExp](functions/isRegExp.md) | 是否是正则 |
| [isSet](functions/isSet.md) | 是否是Set |
| [isString](functions/isString.md) | 是否是字符串 |
| [isSymbol](functions/isSymbol.md) | 是否是符号 |
| [isTypeOf](functions/isTypeOf.md) | 安全的类型检查 |
| [isUndefined](functions/isUndefined.md) | 是否是undefined |

## Classes

| Class | Description |
| ------ | ------ |
| [TinyColor](classes/TinyColor.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TreeConfigOptions](interfaces/TreeConfigOptions.md) | 树形配置选项接口 |
| [IURL](interfaces/IURL.md) | urlParse 解析返回类型 |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [FormatDate](type-aliases/FormatDate.md) | 日期输入类型 |
| [Format](type-aliases/Format.md) | 日期格式类型 |
| [jsonType](type-aliases/jsonType.md) | - |
