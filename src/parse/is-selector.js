import { isStr } from "../index.js"

/**
  Checks if `value` contains selectors.

  @param {any} [value]
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` contains selectors, else `false`.
 */

export function isSelector (value) {
  return (
    isStr(value) &&
    (/^[^@]/u).test(value) &&
    (/([ #$%&*+,.>[^~]|:[a-z])/u).test(value)
  )
}
