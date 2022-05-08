import {
  defaultParams,
  get,
  getIdentifier,
  isPlaceholder,
  merge
} from "../index.js"

/**
  Replace placeholder selector with hashed identifier.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parsePlaceholder (params = defaultParams) {
  const property = /** @type {string} */ (params.property)

  if (isPlaceholder(property)) {
    const media = get(params, "conditional.media")
    const value = params.value

    const identifier = getIdentifier({
      "conditional": { media },
      property,
      "value": property
    })

    const result = /** @type {Params} */ (
      merge(params, {
        identifier
      })
    )

    return value === true
      ? [result]
      : [
        /** @type {Params} */ (
          merge(result, {
            "emit": true,
            "input": { [property]: true },
            "value": true
          })
        ),
        /** @type {Params} */ (
          merge(result, {
            "emit": false,
            "input": value
          })
        )
      ]
  }

  return [params]
}
