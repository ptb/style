import { isArr } from "../index.js"

/**
  Process a string of CSS selectors.

  @param {string} selectors
  - A string of CSS selectors.

  @returns {string[][]}
    An array of an array of selectors.
 */

export function getSelectors (selectors = "") {
  const identifier =
    "-?[A-Z_a-z\\u{00a0}-\\u{ffff}]+[-0-9A-Z_a-z\\u{00a0}-\\u{ffff}]*"

  const regex = new RegExp(
    [
      "(&)",

      "(#".concat(identifier, ")"),

      "(\\.".concat(identifier, ")"),
      "(\\$".concat(identifier, ")"),
      "(%".concat(identifier, ")"),
      "(\\^".concat(identifier, ")"),
      "(\\[[-$*0-9=A-Z^_a-z|~\\u{00a0}-\\u{ffff}]+\\])",
      "(::?".concat(
        "(?:",
        identifier,
        "|\\([^)]+\\)|[+]|[0-9])+",
        ")"
      ),

      "(".concat(identifier, ")"),

      "(\\*)",

      "([ +>~]+)"
    ].join("|"),
    "gu"
  )

  return selectors.split(/,(?![^(]*\))/u).map(function (selector) {
    const matches = selector.trim().match(regex)

    return isArr(matches)
      ? matches.map(function (str) {
        return str.trim().replace(/^$/u, " ")
      })
      : []
  })
}
