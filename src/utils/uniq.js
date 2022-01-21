import { isArr } from "../index.js"

/**
  Creates a duplicate-free copy of an array of strings.

  @param {string[]} [value]
  - The array to inspect.

  @returns {string[]}
    Returns the new duplicate free array.
 */

export function uniq (value) {
  return isArr(value)
    ? value.reduce(
      /**
        Append string only if it is not already included.

        @param {string[]} results
        - The new duplicate free array.

        @param {string} item
        - The string to check.

        @returns {string[]}
          Returns the new duplicate free array.
       */

      function (results, item) {
        return results.indexOf(item) < 0
          ? results.concat(item)
          : results
      },
      []
    )
    : []
}
