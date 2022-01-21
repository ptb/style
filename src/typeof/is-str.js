/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is classified as a `String` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is string}
    Returns `true` if `value` is a string, else `false`.
 */

export function isStr (value) {
  return getType(value) === "String"
}
