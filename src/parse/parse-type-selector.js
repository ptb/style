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

  @param {string} [group]
  - Unique grouping ID string.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseTypeSelector (params = defaultParams, group) {
  const property = /** @type {string} */ (params.property)
  const value = params.value

  if (isTypeSelector(property) && isObj(value)) {
    const emit = false
    const input = value
    const conditional = get(params, "conditional", {})

    return /** @type {Params[]} */ (
      merge(
        parse({ conditional, emit, input }, group, false),
        parse(
          {
            conditional,
            emit,
            input,
            "selectors": [[property]]
          },
          group,
          false
        )
      )
    )
  }

  return [params]
}
