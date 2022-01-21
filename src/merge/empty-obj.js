import { isArr } from "../index.js"

/**
  Creates an empty `Array` or `Object`.

  @typedef {import ("..").PlainObject} PlainObject

  @param {any} [value]
  - The value to check.

  @returns {any[] | PlainObject}
    Returns an empty `Object` or `Array` depending on `value`.
 */

export function emptyObj (value) {
  return isArr(value) ? [] : {}
}
