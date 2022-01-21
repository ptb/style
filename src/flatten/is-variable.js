import { isStr } from "../index.js"

/**
  Checks if `value` is a variable.

  @param {any} [value]
  - The value to check.

  @param {boolean} [exact]
  - True: Entire string matches. False: String contains variable.

  @returns {boolean}
    Returns `true` if `value` is a variable, else `false`.
 */

export function isVariable (value, exact = true) {
  return (
    isStr(value) &&
    (exact
      ? (/^\$[A-Za-z.]+$/u).test(value)
      : (/\$[A-Za-z.]+/u).test(value))
  )
}
