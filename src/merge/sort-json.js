import { emptyObj, isArr, isNull, isObj } from "../index.js"

/**
  Sorts `input` by object key.

  @typedef {import ("..").PlainObject} PlainObject

  @param {any} input
  - The object to sort by key.

  @returns {any}
    Returns a new object sorted by key.
 */

export function sortJSON (input) {
  if (isArr(input)) {
    return input.map(function (item) {
      return sortJSON(item)
    })
  }

  return isNull(input) || !isObj(input)
    ? input
    : Object.keys(input)
      .sort()
      .reduce(
        /**
          @param {PlainObject} output

          @param {string} key

          @returns {PlainObject}
         */
        function (output, key) {
          output[key] = sortJSON(input[key])

          return output
        },
        emptyObj(input)
      )
}
