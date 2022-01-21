import { isStr } from "../index.js"

/**
  Converts `string` to kebab case.

  @param {string} [value]
  - The string to convert.

  @returns {string}
    The kebab cased string.
 */

export function kebabCase (value) {
  return isStr(value)
    ? value.replace(/[A-Z]|^ms/gu, "-$&").toLowerCase()
    : ""
}
