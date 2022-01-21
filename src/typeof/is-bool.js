/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is boolean}
    Returns `true` if `value` is an array, else `false`.
 */

export function isBool (value) {
  return getType(value) === "Boolean"
}
