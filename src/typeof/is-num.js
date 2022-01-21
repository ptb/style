/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is classified as a `Number` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is number}
    Returns `true` if `value` is a number, else `false`.
 */

export function isNum (value) {
  return getType(value) === "Number" && !isNaN(value)
}
