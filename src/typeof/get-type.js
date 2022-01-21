/**
  Returns the object type of the given value.

  @param {any} value
  - The value to check.

  @returns {string}
    The object type of the given value as a string.
 */

export function getType (value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
