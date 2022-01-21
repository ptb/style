import {
  defaultParams,
  isArr,
  mergeArrOfObj,
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

  return mergeArrOfObj(
    toPairs(rules).reduce(
      /**
        @param {PlainObject[]} styles

        @param {[string, any]} style

        @returns {PlainObject[]}
       */
      function (styles, style) {
        const property = style[0]
        const value = style[1]

        return styles.concat({ [property]: value })
      },
      []
    )
  )
}
