import { getConditionals, isObj, isStr } from "../index.js"

/**
  Checks if `key` is a conditional group rule or shorthand query.

  @param {"media" | "supports"} rule
  - Conditional group rule string.

  @param {string} value
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` is a conditional query, else `false`.
 */

function testRule (rule, value) {
  return (
    new RegExp("^@" + rule, "u").test(value) ||
    Object.keys(getConditionals(rule)).indexOf(value) >= 0
  )
}

/**
  Checks if `value` is a conditional group declaration.

  @param {"media" | "supports"} rule
  - Conditional group rule string.

  @param {any} [value]
  - The value to check.

  @param {any} [property]
  - The property to check.

  @returns {boolean}
    Returns `true` if `value` is a conditional query, else `false`.
 */

export function isConditional (rule, value, property) {
  if (!isObj(value)) {
    return false
  }

  if (isStr(property)) {
    return testRule(rule, property)
  }

  return Object.keys(value).some(function (key) {
    return testRule(rule, key)
  })
}
