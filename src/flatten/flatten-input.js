import {
  defaultParams,
  get,
  getMedia,
  getShorthand,
  isArr,
  isObj,
  isShorthand,
  isVariable,
  mergeArrOfObj,
  replaceVariables,
  setVariable,
  toPairs
} from "../index.js"

/**
  Process the `input` property of a CSS style object.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {PlainObject}
    Object containing raw CSS styles.
 */

export function flattenInput (params = defaultParams) {
  const rules = mergeArrOfObj(
    isArr(params.input)
      ? params.input.filter(Boolean)
      : params.input || {}
  )

  const conditional = get(params, "conditional", {})
  const media = getMedia(get(conditional, "media"))

  return mergeArrOfObj(
    toPairs(rules).reduce(
      /**
        @param {PlainObject[]} styles

        @param {[string, any]} style

        @returns {PlainObject[]}
       */
      function (styles, style) {
        const property = style[0]
        let value = style[1]

        if (isVariable(value, false)) {
          value = replaceVariables(value, media)
        }

        if (isArr(value)) {
          value = value.map(function (val) {
            return replaceVariables(val, media)
          })
        }

        if (isVariable(property, true)) {
          const input = mergeArrOfObj(
            value === true
              ? replaceVariables(property, media)
              : setVariable({ conditional, property, value })
          )

          return isObj(input)
            ? styles.concat(flattenInput({ input }))
            : styles
        } else if (isVariable(property, false)) {
          const input = replaceVariables(property, media)

          return styles.concat({ [input]: value })
        } else if (isShorthand(property)) {
          return styles.concat(getShorthand(property, value))
        }

        return styles.concat({ [property]: value })
      },
      []
    )
  )
}
