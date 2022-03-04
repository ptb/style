import { isStr } from "../index.js"

/**
  Checks if `value` is a type selector.

  @param {any} [value]
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` is a type selector, else `false`.
 */

export function isTypeSelector (value) {
  return isStr(value) && (/^[a-z][-a-z0-9]*$/u).test(value)
}
