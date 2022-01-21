/*
  eslint-disable
    jsdoc/check-param-names,
 */

import {
  cloneObj,
  emptyObj,
  isArr,
  isObj,
  isUndef,
  mergeArr,
  mergeObj
} from "../index.js"

/**
  Recursively merges own properties of source objects or arrays into a new
  empty object or array. Array and plain object properties are merged
  recursively. Other objects and value types are overridden by assignment.
  Source objects are applied from left to right. Subsequent sources
  overwrite property assignments of previous sources.

  @typedef {import ("..").PlainObject} PlainObject

  @param {... PlainObject | any} sources
  - The source objects or arrays.

  @returns {PlainObject | any[]}
    Returns `object` or `array`.
 */

export function merge () {
  const sources = Array.prototype.slice.call(arguments)
  const initial = sources[0]

  return sources.reduce(function (target, source) {
    if (isUndef(source)) {
      return target
    } else if (isObj(initial) && isArr(source)) {
      return merge(target, merge.apply(null, source))
    } else if (isArr(source)) {
      return mergeArr(target, source)
    } else if (isObj(source)) {
      return mergeObj(target, source)
    }

    return cloneObj(source)
  }, emptyObj(initial))
}
