import {
  defaultParams,
  get,
  getMedia,
  getPropertyId,
  isArr,
  isStr,
  isUndef,
  murmurHash
} from "../index.js"

/**
  Create `identifier` from `media`, `selectors`, and `value`.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {number} size
  - Number of characters to include in the string hash.

  @returns {string | null}
    An array of this project's common exchange CSS style objects.
 */

export function getIdentifier (params = defaultParams, size = 4) {
  const media = get(params, "conditional.media")
  const property = params.property
  const selectors = params.selectors
  const value = params.value

  const identifier = params.identifier

  if (isStr(property)) {
    const propertyId = getPropertyId(property).toString(36)

    const ruleset = ""
      .concat(getMedia(media))
      .concat(
        isArr(selectors)
          ? selectors
            .map(function (selector) {
              return selector.join("")
            })
            .join(",")
          : ""
      )
      .concat(isUndef(value) ? "" : JSON.stringify(value))

    const hashString = murmurHash(ruleset).slice(-size)

    return isUndef(identifier) ? propertyId + hashString : identifier
  }

  return null
}
