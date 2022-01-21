import { defaultParams, isNum, isStr, merge } from "../index.js"

/**
  Process numbers in the `value` property of a CSS style object.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function modifyNumbers (params = defaultParams) {
  const property = params.property
  const value = params.value

  const regex =
    /* eslint-disable-next-line max-len */
    /(animationIterationCount|borderImage(?:Outset|Slice|Width)|box(?:(?:Flex)(?:Group)?|OrdinalGroup)|column(?:Count|s)|fillOpacity|floodOpacity|stopOpacity|stroke(?:Dash(?:array|offset)|Miterlimit|Opacity|Width)|flex(?:Grow|Positive|Shrink|Negative|Order)?\b|grid(?:Area|Column(?:End|Start)?|Row(?:End|Start)?)|fontWeight|line(?:Clamp|Height)|opacity|\border|orphans|tabSize|widows|zIndex|zoom)/u

  if (
    isNum(value) &&
    value !== 0 &&
    isStr(property) &&
    !regex.test(property)
  ) {
    return [
      /** @type {Params} */ (merge(params, {
        "value": "".concat(value.toString(), "px")
      }))
    ]
  }

  return [params]
}
