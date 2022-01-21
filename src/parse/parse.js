import {
  defaultParams,
  flattenInput,
  merge,
  parseConditional,
  parseInput,
  parseSelectors,
  parseTypeSelector
} from "../index.js"

/**
  Process raw styles into this project's common exchange CSS style objects.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {PlainObject} params
  - This project's common exchange CSS style object.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parse (params = defaultParams) {
  const input = /** @type {Params} */ (merge(
    params,
    { "input": undefined },
    { "input": flattenInput(params) }
  ))

  return parseInput(input)
    .reduce(
      /**
        @param {Params[]} styles

        @param {Params} style

        @returns {Params[]}
       */
      function (styles, style) {
        return styles.concat(parseConditional(style))
      },
      []
    )
    .reduce(
      /**
        @param {Params[]} styles

        @param {Params} style

        @returns {Params[]}
       */
      function (styles, style) {
        return styles.concat(parseConditional(style, "supports"))
      },
      []
    )
    .reduce(
      /**
        @param {Params[]} styles

        @param {Params} style

        @returns {Params[]}
       */
      function (styles, style) {
        return styles.concat(parseSelectors(style))
      },
      []
    )
    .reduce(
      /**
        @param {Params[]} styles

        @param {Params} style

        @returns {Params[]}
       */
      function (styles, style) {
        return styles.concat(parseTypeSelector(style))
      },
      []
    )
}
