import { getShorthands, isStr } from "../index.js"

/**
  Checks if `value` is a shorthand property.

  @param {string} [value]
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` is a shorthand property, else `false`.
 */

export function isShorthand (value) {
  return (
    isStr(value) &&
    ((/^(margin|padding)[HVXY]/u).test(value) ||
      Object.keys(getShorthands()).indexOf(value) >= 0)
  )
}
