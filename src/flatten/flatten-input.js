import {
  defaultParams,
  get,
  getMedia,
  isArr,
  isObj,
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

  const media = get(params, "conditional.media")
  const mediaStr = getMedia(media)

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
          value = replaceVariables(value, mediaStr)
        }

        if (isArr(value)) {
          value = value.map(function (val) {
            return replaceVariables(val, mediaStr)
          })
        }

        if (isVariable(property, true)) {
          const input = mergeArrOfObj(
            value === true
              ? replaceVariables(property, mediaStr)
              : setVariable({
                "conditional": { media },
                property,
                value
              })
          )

          return isObj(input)
            ? styles.concat(flattenInput({ input }))
            : styles
        } else if (isVariable(property, false)) {
          const input = replaceVariables(property, mediaStr)

          return styles.concat({ [input]: value })
        }

        return styles.concat({ [property]: value })
      },
      []
    )
  )
}
