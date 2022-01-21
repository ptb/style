import { getPropertyId, isStr } from "../index.js"

/**
  Checks if `value` is a valid CSS property.

  @param {any} [value]
  - The value to check.

  @returns {boolean}
    Returns `true` if `value` is a valid CSS property, else `false`.
 */

export function isProperty (value) {
  if (isStr(value)) {
    const lo = getPropertyId("")
    const hi = getPropertyId("&")

    const propertyId = getPropertyId(value)

    return propertyId > lo && propertyId < hi
  }

  return false
}
