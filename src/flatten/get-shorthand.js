import {
  getShorthands,
  isShorthand,
  isStr,
  isUndef,
  mergeArrOfObj
} from "../index.js"

/**
  Replace shorthand properties with their expanded equivalent.

  @typedef {import ("..").PlainObject} PlainObject

  @param {string} input
  - Shorthand property string.

  @param {any} value
  - Provided input value.

  @returns {PlainObject}
    Object containing raw CSS styles.
 */

export function getShorthand (input, value) {
  const shorthands = getShorthands()

  let property = input

  if (isShorthand(property)) {
    if ((/^margin[HX]/u).test(property)) {
      property = "mx"
    } else if ((/^margin[VY]/u).test(property)) {
      property = "my"
    } else if ((/^padding[HX]/u).test(property)) {
      property = "px"
    } else if ((/^padding[VY]/u).test(property)) {
      property = "py"
    }

    const properties = /** @type {string | string[]} */ (
      shorthands[property]
    )

    if (isStr(properties)) {
      return { [properties]: value }
    }

    return mergeArrOfObj(
      properties.map(function (prop) {
        return { [prop]: value }
      })
    )
  }

  return isUndef(property) ? {} : { [property]: value }
}
