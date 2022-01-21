import {
  defaultParams,
  get,
  getBlockString,
  getMedia,
  getSelectorsString,
  getSupportsString,
  isStr,
  isUndef
} from "../index.js"

/**
  Return complete CSS ruleset string from common exchange style object.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {boolean} mq
  - Include media query in ruleset string.

  @returns {string}
    A complete CSS ruleset string with optional media query.
 */

export function getStyle (params = defaultParams, mq = false) {
  const block = getBlockString(params)
  const media = mq && getMedia(get(params, "conditional.media"))
  const property = params.property
  const selectors = getSelectorsString(params)
  const supports = getSupportsString(
    get(params, "conditional.supports")
  )

  return isUndef(property) ||
    (isStr(property) && (/^[%$]/u).test(property)) ||
    selectors.length === 0 ||
    block.length === 0
    ? ""
    : [
      media ? "@media ".concat(media, "{") : "",
      supports ? "@supports ".concat(supports, "{") : "",
      getSelectorsString(params),
      "{",
      getBlockString(params),
      "}",
      supports ? "}" : "",
      media ? "}" : ""
    ].join("")
}
