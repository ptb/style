import { isArr, isStr, kebabCase, uniq } from "../index.js"

/**
  Join array of feature queries into a string.

  @param {any} [value]
  - Array of feature query strings.

  @returns {string}
    Returns a feature query string.
 */

export function getSupportsString (value) {
  const supports = isArr(value)
    ? uniq(
      value
        .map(function (s) {
          return isStr(s) ? s.replace(/: +/gu, ":").trim() : ""
        })
        .map(kebabCase)
        .filter(Boolean)
    ).sort()
    : []

  if (supports.length > 1) {
    return "(".concat(supports.join(" and "), ")")
  }

  return supports.join("")
}
