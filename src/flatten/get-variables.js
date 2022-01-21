import { isStr } from "../index.js"

/**
  Returns `RegExpMatchArray` if `property` contains variables.

  @param {any} [value]
  - The value to check.

  @returns {false | RegExpMatchArray | null}
    Returns `RegExpMatchArray` containing variables.
 */

export function getVariables (value) {
  return isStr(value) && value.match(/\$[A-Za-z.]+/gu)
}
