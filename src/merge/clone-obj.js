import { canMerge, emptyObj, merge } from "../index.js"

/**
  Creates a recursive clone of `value`.

  @typedef {import ("..").PlainObject} PlainObject

  @param {any | PlainObject} value
  - The value to clone.

  @returns {any | any[] | PlainObject}
    Returns a recursive clone of `value`.
 */

export function cloneObj (value) {
  return canMerge(value) ? merge(emptyObj(value), value) : value
}
