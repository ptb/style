import {
  defaultParams,
  get,
  getIdentifier,
  isObj,
  isStr,
  kebabCase,
  merge,
  toPairs
} from "../index.js"

/**
  Process the `property` when the key is `animationName`.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseKeyframes (params = defaultParams) {
  const property = params.property
  const input = /** @type {PlainObject} */ (params.value)

  if (property === "animationName" && isObj(input)) {
    const conditional = get(params, "conditional", {})
    const selectors = ["@keyframes", " "]

    const identifier = /** @type {string} */ (
      getIdentifier(
        /** @type {Params} */ (
          merge(
            params,
            { "selectors": undefined },
            { "selectors": [selectors] }
          )
        )
      )
    )

    const anim = /** @type {Params} */ ({
      "block": toPairs(input)
        .map(
          /**
            @param {[string, any]} style

            @returns {PlainObject | false}
           */
          function (style) {
            const prop = style[0]

            return isStr(prop) && { [kebabCase(prop)]: style[1] }
          }
        )
        .filter(Boolean),
      "emit": false,
      identifier,
      property,
      "selectors": [selectors.concat(identifier)],
      "value": identifier
    })

    const rule = {
      "block": [{ "animation-name": identifier }],
      conditional,
      "emit": true,
      identifier,
      property,
      "selectors": [[".".concat(identifier)]],
      "value": identifier
    }

    return [anim, rule]
  }

  return [params]
}
