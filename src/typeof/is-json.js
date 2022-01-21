import { isArr, isObj, isStr } from "../index.js"

/**
  Checks if `value` is a valid JSON object.

  @param {any} value
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` is a valid JSON object, else `false`.
 */

export function isJSON (value) {
  let input = value

  if (!isStr(value)) {
    input = JSON.stringify(value)
  }

  try {
    input = JSON.parse(input)

    return isArr(input) || isObj(input)
  } catch (_) {
    return false
  }
}
