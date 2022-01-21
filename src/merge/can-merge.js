import { isArr, isObj } from "../index.js"

/**
  Checks if `value` can be merged.

  @param {any} value
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` can be merged, else `false`.
 */

export function canMerge (value) {
  return (
    Boolean(value) &&
    (isArr(value) || isObj(value)) &&
    !(/^\[object (?:Date|RegExp)\]$/u).test(
      Object.prototype.toString.call(value)
    )
  )
}
