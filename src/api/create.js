import { css, isArr, isFn, isObj, toPairs } from "../index.js"

/**
  Creates a JavaScript object containing keys as identifiers and class
  names as values. If the value is a function, it is assigned to the
  value as is, without executing.

  @typedef {import (".").StylesObject} StylesObject

  @param {Record<string, Function | StylesObject | StylesObject[]>} [input]
  - Plain JavaScript object with keys containing CSS styles.

  @returns {Record<string, string | Function>}
    Plain JavaScript object with keys as identifiers and class names or
    functions as values.
 */

export function create (input = {}) {
  return toPairs(input).reduce(
    /**
      Assigns resulting class names or functions to original keys.

      @param {Record<string, string | Function>} styles
      - Object with keys as strings and values as class names or functions.

      @param {[string, Function | StylesObject | StylesObject[]]} style
      - Key/value pair from original input.

      @returns {Record<string, string | Function>}
        Object with keys as strings and values as class names or functions.
     */

    function (styles, style) {
      const property = style[0]
      const value = style[1]

      if (isFn(value)) {
        styles[property] = value
      } else if (isArr(value) || isObj(value)) {
        styles[property] = css(
          /** @type {StylesObject | StylesObject[]} */ (value)
        )
      }

      return styles
    },
    {}
  )
}
