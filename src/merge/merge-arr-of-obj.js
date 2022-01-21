import { isArr, isObj, merge } from "../index.js"

/**
  Merges objects from `value` array.

  @typedef {import ("..").PlainObject} PlainObject

  @param {PlainObject[] | any} [value]
  - An array of objects.

  @returns {PlainObject | any}
    Returns a new array with value objects merged.
 */

export function mergeArrOfObj (value) {
  if (
    isArr(value) &&
    value.every(function (obj) {
      return isObj(obj)
    })
  ) {
    return merge.apply(null, value)
  }

  return value
}
