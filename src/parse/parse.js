/*
  eslint-disable
    max-lines-per-function
 */

import {
  defaultParams,
  flattenInput,
  merge,
  modifyNumbers,
  parseConditional,
  parseFallbacks,
  parseFontFace,
  parseInput,
  parseKeyframes,
  parsePlaceholder,
  parseProperties,
  parseSelectors,
  parseSelfSelector,
  parseTypeSelector
} from "../index.js"

/**
  Process raw styles into this project's common exchange CSS style objects.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {PlainObject} params
  - This project's common exchange CSS style object.

  @param {string} [group]
  - Unique grouping ID string.

  @param {boolean} [prime]
  - True: Primary loop. False: Recursive loop.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parse (params = defaultParams, group = "", prime) {
  const input = /** @type {Params} */ (merge(
    params,
    { "input": undefined },
    { "input": flattenInput(params) }
  ))

  return parseInput(input, group)
    .reduce(
      /**
        @param {Params[]} styles

        @param {Params} style

        @returns {Params[]}
       */
      function (styles, style) {
        return styles.concat(parseConditional(style, "media", group))
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
        return styles.concat(
          parseConditional(style, "supports", group)
        )
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
        return styles.concat(parseSelectors(style, group))
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
        return styles.concat(parseTypeSelector(style, group))
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
        return styles.concat(parsePlaceholder(style))
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
        return styles.concat(modifyNumbers(style))
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
        return styles.concat(parseKeyframes(style))
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
        return styles.concat(parseFontFace(style))
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
        return styles.concat(parseFallbacks(style))
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
        return styles.concat(parseSelfSelector(style, group, prime))
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
        return styles.concat(parseProperties(style, group, prime))
      },
      []
    )
}
