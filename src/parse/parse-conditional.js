import {
  camelCase,
  defaultParams,
  get,
  getConditionals,
  isArr,
  isConditional,
  isStr,
  isUndef,
  merge,
  parse,
  toPairs
} from "../index.js"

/**
  Returns the query list string without the at-rule prefix.

  @param {string} input
  - The value to format.

  @returns {string}
    Returns the query list string without the at-rule prefix.
 */

function getString (input) {
  return camelCase(
    input.slice(input.indexOf(" ")).trim()
      .replace(/: +/u, ":")
  )
}

/**
  Merge the new `feature` to the `input` object.

  @param {PlainObject} input
  - The `input` object that should include the `feature`.

  @param {"media" | "supports"} rule
  - Conditional group rule string.

  @param {string} feature
  - The query list string without the at-rule prefix.

  @returns {PlainObject}
    Returns the `input` object with the `feature` prepended to the array
  with the `rule` key`.
 */

function getObject (input, rule, feature) {
  return merge(
    input,
    { [rule]: undefined },
    {
      [rule]: [feature]
        .concat(isArr(input[rule]) ? input[rule] : [])
        .filter(Boolean)
    }
  )
}

/**
  Process the media query `property` object of a CSS style object.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {"media" | "supports"} rule
  - Conditional group rule string.

  @param {string} [group]
  - Unique grouping ID string.

  @returns {Params[]}
    An array of this project's common exchange CSS style objects.
 */

export function parseConditional (
  params = defaultParams,
  rule = "media",
  group = ""
) {
  const property = /** @type {string} */ (params.property)
  const value = /** @type {PlainObject} */ (params.value)

  if (isConditional(rule, value)) {
    const emit = params.emit
    const selectors = params.selectors

    return toPairs(value)
      .map(function (style) {
        const key = style[0]
        const val = style[1]

        const features = getConditionals(rule)

        const feature =
          isUndef(features[key]) && isConditional(rule, {}, key)
            ? getString(key)
            : features[key]

        let conditional = get(params, "conditional", { [rule]: [] })
        let input = { [key]: val }

        if (isStr(feature)) {
          conditional = getObject(conditional, rule, feature)
          input = isStr(property) ? { [property]: val } : val
        }

        return parse(
          { conditional, emit, input, property, selectors },
          group,
          false
        )
      })
      .reduce(function (styles, style) {
        return styles.concat(style)
      }, [])
  } else if (isConditional(rule, value, property)) {
    return parse(
      {
        "conditional": getObject(
          get(params, "conditional", { [rule]: [] }),
          rule,
          getString(property)
        ),
        "input": value
      },
      group,
      false
    )
  }

  return [params]
}
