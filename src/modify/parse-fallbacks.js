import {
  defaultParams,
  get,
  getMedia,
  getPrefixes,
  isArr,
  isFontFace,
  isStr,
  kebabCase,
  merge,
  replaceVariables
} from "../index.js"

/**
  Process the `value` when the value is an array.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseFallbacks (params = defaultParams) {
  const media = getMedia(get(params, "conditional.media"))
  const property = params.property
  let value = params.value

  const prefixes = getPrefixes()
  const hasPrefix =
    isStr(property) && Object.keys(prefixes).indexOf(property) >= 0

  if (
    isStr(property) &&
    !isFontFace(property) &&
    (isArr(value) || hasPrefix)
  ) {
    let block

    if (isArr(value)) {
      value = value.map(function (fallback) {
        return replaceVariables(fallback, media)
      })

      block = (/^background[IPRS]/u).test(property)
        ? [
          {
            [kebabCase(property)]: value.join(",")
          }
        ]
        : value.map(
          /**
            @param {string | number} fallback
           */
          function (fallback) {
            return {
              [kebabCase(property)]: fallback
            }
          }
        )
    }

    if (hasPrefix) {
      block = prefixes[property]
        .map(
          /**
            @param {string} prefix
           */
          function (prefix) {
            return { [kebabCase(prefix + property)]: value }
          }
        )
        .concat({ [kebabCase(property)]: value })
    }

    return [
      /** @type {Params} */ (
        merge(
          params,
          { "block": undefined, "value": undefined },
          { block, value }
        )
      )
    ]
  }

  return [params]
}
