import {
  defaultParams,
  get,
  isObj,
  isTypeSelector,
  merge,
  parse
} from "../index.js"

/**
  Process type selectors from `property` keys.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseTypeSelector (params = defaultParams) {
  const property = /** @type {string} */ (params.property)
  const value = params.value

  if (isTypeSelector(property) && isObj(value)) {
    const emit = false
    const input = value
    const media = get(params, "conditional.media")

    return /** @type {Params[]} */ (merge(
      parse({ "conditional": { media }, emit, input }),
      parse({
        "conditional": { media },
        emit,
        input,
        "selectors": [[property]]
      })
    ))
  }

  return [params]
}
