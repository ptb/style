import { isStr } from "../index.js"

/**
  Removes non-alpha characters from string replacing with `-`.

  @param {string} [value]
  - The string to convert.

  @returns {string}
    The string with non-alpha characters replaced with `-`.
 */

export function getId (value) {
  return (isStr(value) ? value : "")
    .trim()
    .toLowerCase()
    .replace(/[^0-9a-z]/gu, "-")
}
