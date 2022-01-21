import { defaultParams, isArr } from "../index.js"

/**
  Process the `selectors` when value is an array.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {string}
    A string of selectors joined with commas.
 */

export function getSelectorsString (params = defaultParams) {
  const selectors = params.selectors

  return isArr(selectors)
    ? selectors
      .map(
        /**
          @param {string[]} selector

          @returns {string}
         */
        function (selector) {
          return selector.join("")
        }
      )
      .filter(Boolean)
      .join(",")
    : ""
}
