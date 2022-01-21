import {
  defaultParams,
  get,
  getMedia,
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

  if (isStr(property) && !isFontFace(property) && isArr(value)) {
    let block

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

    return [
      /** @type {Params} */ (merge(
        params,
        { "block": undefined, "value": undefined },
        { block, value }
      ))
    ]
  }

  return [params]
}
