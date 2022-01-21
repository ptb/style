import { getStyle } from "../index.js"

/**
  Process each cached ruleset and combine into a string.

  @typedef {import ("..").Params} Params

  @param {Params[]} rules
  - This project's common exchange CSS style object.

  @param {string} [media]
  - Media query string.

  @returns {string}
    Combined cached CSS rulesets as a string.
 */

export function getRules (rules = [], media) {
  /** @type {string[]} */
  let styles = []

  rules.forEach(
    /** @param {Params} style */
    function (style) {
      styles.push(getStyle(style))
    }
  )

  styles = styles.sort()

  if (media) {
    styles.unshift("@media ".concat(media, "{"))
    styles.push("}")
  }

  return styles.join("")
}
