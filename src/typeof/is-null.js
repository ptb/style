/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is `null`.

  @param {any} value
  - The value to check.

  @returns {value is null}
    Returns `true` if `value` is `null`, else `false`.
 */

export function isNull (value) {
  return getType(value) === "Null"
}
