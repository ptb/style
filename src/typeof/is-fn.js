/*
  eslint-disable
    jsdoc/valid-types
 */

/**
  Checks if `value` is classified as a `Function` object.

  @typedef {import ("..").AnyFunction} AnyFunction

  @param {any} value
  - The value to check.

  @returns {value is AnyFunction}
    Returns `true` if `value` is a function, else `false`.
 */

export function isFn (value) {
  return typeof value === "function"
}
