/**
  @typedef {function (any[]): any} AnyFunction

  @typedef {Record<string | number | symbol, any>} PlainObject
 */

export { getType } from "./typeof/get-type.js"
export { isArr } from "./typeof/is-arr.js"
export { isBool } from "./typeof/is-bool.js"
export { isFn } from "./typeof/is-fn.js"
export { isJSON } from "./typeof/is-json.js"
export { isNull } from "./typeof/is-null.js"
export { isNum } from "./typeof/is-num.js"
export { isObj } from "./typeof/is-obj.js"
export { isStr } from "./typeof/is-str.js"
export { isSym } from "./typeof/is-sym.js"
export { isUndef } from "./typeof/is-undef.js"

export { camelCase } from "./utils/camel-case.js"
export { debounce } from "./utils/debounce.js"
export { get } from "./utils/get.js"
export { kebabCase } from "./utils/kebab-case.js"
