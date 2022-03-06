import { css, toPairs } from "../index.js"

/**
  Creates a JavaScript object with keys as identifiers and class names
  as values.

  @typedef {import (".").StylesObject} StylesObject

  @param {Record<string, StylesObject | (StylesObject | undefined)[]>} [input]
  - Plain JavaScript object with keys containing CSS styles.

  @returns {Record<string, string>}
    Plain JavaScript object with keys as identifiers and class names
    as values.
 */

export function create (input = {}) {
  return toPairs(input).reduce(
    /**
      Assigns resulting class names to original keys.

      @param {Record<string, string>} styles
      - Object with keys as strings and values as class names.

      @param {[string, StylesObject | (StylesObject | undefined)[]]} style
      - Key/value pair from original input.

      @returns {Record<string, string>}
        Object with keys as strings and values as class names.
     */

    function (styles, style) {
      const property = style[0]
      const value = style[1]

      styles[property] = css(value)

      return styles
    },
    {}
  )
}
