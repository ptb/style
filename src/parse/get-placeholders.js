import { getIdentifier } from "../index.js"

/**
  Assign an identifier to selectors that begin with `%`.

  @param {string[]} selectors
  - An array of selector strings.

  @param {string[]} [media]
  - A media query string.

  @returns {string[]}
    An array of selector strings.
 */

export function getPlaceholders (selectors = [], media) {
  return selectors.map(function (selector) {
    if ((/^%/u).test(selector)) {
      const identifier = /** @type {string} */ (getIdentifier({
        "conditional": { media },
        "property": selector,
        "value": selector
      }))

      return ".".concat(identifier)
    }

    return selector
  })
}
