/**
 * @param {string[]} ancestors
 * @param {string[]} selectors
 * 
 * @returns {string[]}
 */

export function getAncestors (ancestors = [], selectors = []) {
  return selectors.reduce (
    /**
     * @param {string[]} results
     * @param {string} selector 
     */

    function (results, selector) {
      if (ancestors.length) {
        const index = selector.indexOf ("&")

        ancestors.forEach (function (ancestor) {
          results.push (
            index < 0
              ? ancestor.concat (" ", selector)
              : selector
                .slice (0, index)
                .concat (ancestor, selector.slice (index + 1))
          )
        })

        return results
      }

    return results.concat ([selector])
    },
    []
  )
}
