import { isArr, isStr, kebabCase, uniq } from "../index.js"

/**
  Join array of media queries into a string.

  @param {any} [value]
  - Array of media query strings.

  @returns {string}
    Returns a media query string.
 */

export function getMedia (value) {
  return isArr(value)
    ? uniq(
      value
        .map(function (s) {
          return isStr(s) ? s.replace(/: +/gu, ":").trim() : ""
        })
        .map(kebabCase)
        .filter(Boolean)
    )
      .sort()
      .join(" and ")
    : ""
}
