/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is any[]}
    Returns `true` if `value` is an array, else `false`.
 */

export function isArr (value) {
  return getType(value) === "Array"
}
