/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is classified as a `Symbol` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is symbol}
    Returns `true` if `value` is a symbol, else `false`.
 */

export function isSym (value) {
  return getType(value) === "Symbol"
}
