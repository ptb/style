/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is `undefined`.

  @param {any} [value]
  - The value to check.

  @returns {value is undefined}
    Returns `true` if `value` is `undefined`, else `false`.
 */

export function isUndef (value) {
  return getType(value) === "Undefined"
}
