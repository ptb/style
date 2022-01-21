/*
  eslint-disable
    jsdoc/valid-types
 */

import { getType } from "../index.js"

/**
  Checks if `value` is the language type of `Object`.

  @typedef {import ("..").PlainObject} PlainObject

  @param {any} value
  - The value to check.

  @returns {value is PlainObject}
    Returns `true` if `value` is an object, else `false`.
 */

export function isObj (value) {
  return getType(value) === "Object"
    ? value.constructor === Object &&
        Object.getPrototypeOf(value) === Object.prototype
    : false
}
