import {
  camelCase,
  defaultParams,
  get,
  isConditional,
  isUndef,
  mergeArrOfObj,
  parseConditional,
  toPairs
} from "../index.js"

/**
  Process the `input` property of a CSS style object.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {string} [group]
  - Unique grouping ID string.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseInput (params = defaultParams, group = "") {
  const conditional = get(params, "conditional", {})
  const emit = isUndef(params.emit) ? true : params.emit
  const input = mergeArrOfObj(params.input)
  const selectors = params.selectors

  if (isConditional("media", input)) {
    return parseConditional(
      {
        conditional,
        emit,
        "property": params.property,
        selectors,
        "value": input
      },
      "media",
      group
    )
  } else if (isConditional("supports", input)) {
    return parseConditional(
      {
        conditional,
        emit,
        "property": params.property,
        selectors,
        "value": input
      },
      "supports",
      group
    )
  }

  return toPairs(input).map(function (style) {
    const property = style[0]
    const value = style[1]

    return {
      conditional,
      emit,
      "property": camelCase(property),
      selectors,
      value
    }
  })
}
