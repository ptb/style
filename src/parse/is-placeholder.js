import { isStr } from "../index.js"

/**
  Checks if `value` is a placeholder.

  @param {any} [value]
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` is a placeholder, else `false`.
 */

export function isPlaceholder (value) {
  return isStr(value) && (/^%[A-Za-z]+$/u).test(value)
}
