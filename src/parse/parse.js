import {
  defaultParams,
  flattenInput,
  merge,
  parseInput
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
}
