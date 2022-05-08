import {
  defaultParams,
  get,
  getAncestors,
  getPlaceholders,
  getSelectors,
  isArr,
  isObj,
  isSelector,
  kebabCase,
  merge,
  parse
} from "../index.js"

/**
  Parse selectors from `property` keys.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {string} [group]
  - Unique grouping ID string.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseSelectors (params = defaultParams, group = "") {
  const property = /** @type {string} */ (params.property)
  const input = params.value

  if (isSelector(property) && isObj(input)) {
    const emit = (/^:/u).test(property)
    const conditional = get(params, "conditional", {})

    /** @type {string[][]} */
    const selectors = getSelectors(kebabCase(property))
      .reduce(
        /**
          Combine array of `selectors` with array of `ancestors`.

          @param {string[][]} a
          - An array of selector strings.

          @param {string[]} b
          - An array of selector strings.

          @returns {string[][]}
            An array of selector strings.
         */

        function (a, b) {
          return a.concat(
            getAncestors(
              isArr(params.selectors) ? params.selectors : [],
              [b]
            )
          )
        },
        []
      )
      .reduce(
        /**
          Replace placeholders with their hashed equivalent.

          @param {string[][]} a
          - An array of selector strings.

          @param {string[]} b
          - An array of selector strings.

          @returns {string[][]}
            An array of selector strings.
         */

        function (a, b) {
          return a.concat([getPlaceholders(b)])
        },
        []
      )

    const noAncestors = Object.keys(input).every(function (item) {
      return !(/&/u).test(item)
    })

    if (noAncestors) {
      return /** @type {Params[]} */ (
        merge(
          parse({ conditional, "emit": false, input }, group, false),
          parse({ conditional, emit, input, selectors }, group, false)
        )
      )
    }

    return parse(
      { conditional, emit, input, selectors },
      group,
      false
    )
  }

  return [params]
}
