/**
  Combine array of `selectors` with array of `ancestors`.

  @param {string[][]} ancestors
  - Array of ancestor selectors wrapped in a single array.

  @param {string[][]} selectors
  - Array of selector strings wrapped in a single array.

  @returns {string[][]}
    Array of selector strings wrapped in a single array.
 */

export function getAncestors (ancestors = [], selectors = []) {
  return selectors.reduce(
    /**
      Iterate through `selectors` and for each ancestor, if the ancestor
      location is specified using the `&` character, splice the ancestor
      array with the `selector`. If no ancestors are specified, return
      the selector array as is.

      @param {string[][]} results
      - Array of selector strings wrapped in a single array.

      @param {string[]} selector
      - Array of selector strings.

      @returns {string[][]}
        Array of selector strings wrapped in a single array.
     */

    function (results, selector) {
      if (ancestors.length) {
        const index = selector.indexOf("&")

        /** @param {string[]} ancestor */
        ancestors.forEach(function (ancestor) {
          results.push(
            index < 0
              ? ancestor.concat(" ", selector)
              : selector
                .slice(0, index)
                .concat(ancestor, selector.slice(index + 1))
          )
        })
      } else {
        results.push(selector)
      }

      return results
    },
    []
  )
}
