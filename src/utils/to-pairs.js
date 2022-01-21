import { isObj } from "../index.js"

/**
  Creates an array of own enumerable string keyed-value pairs for `object`.

  @typedef {import ("..").PlainObject} PlainObject

  @param {PlainObject} [value]
  - The object to query.

  @returns {[string, any][]}
    Returns the key-value pairs.
 */

export function toPairs (value) {
  return isObj(value)
    ? Object.keys(value).map(function (key) {
      return [key, value[key]]
    })
    : []
}
