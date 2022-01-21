import { isStr } from "../index.js"

/**
  Converts `string` to camel case.

  @param {string} [value]
  - The string to convert.

  @returns {string}
    The camel cased string.
 */

export function camelCase (value) {
  return isStr(value)
    ? value.replace(/\x2D([a-z])/gu, function (_, a) {
      return a.toUpperCase()
    })
    : ""
}
