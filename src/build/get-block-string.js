import {
  defaultParams,
  getPropertyId,
  isArr,
  isObj,
  isStr,
  kebabCase,
  toPairs
} from "../index.js"

/**
  Convert `block` property to a string.

  @typedef {import ("..").Params} Params

  @param {Params} params
  - This project's common exchange CSS style object.

  @param {boolean} custom
  - True: Return a custom string for caching in certain circumstances.
  - False: Return a default block string.

  @returns {string[]}
    CSS declaration string of style properties and rules.
 */

export function getBlockString (
  params = defaultParams,
  custom = false
) {
  const block = params.block

  let sep = ";"

  return [
    isArr(block)
      ? block
        .map(function (rule) {
          return toPairs(rule).map(function (style) {
            const property = style[0]
            const value = style[1]

            if (
              custom &&
                isStr(property) &&
                (/^--[a-z]/u).test(property)
            ) {
              const results = (params.selectors || [])
                .filter(function (selector) {
                  const regex = new RegExp(
                    [
                      "^\\.",
                      getPropertyId(property).toString(36)
                    ].join(""),
                    "u"
                  )

                  return !regex.test(selector.join(""))
                })
                .map(function (selector) {
                  return selector
                    .join("")
                    .concat("{", kebabCase(property), "}")
                })
                .filter(Boolean)

              if (results.length) {
                return results
              }
            }

            if (isObj(value)) {
              const a = toPairs(value)
                .map(function (b) {
                  return kebabCase(b[0]).concat(":", b[1])
                })
                .join(";")

              sep = ""

              return "".concat(property, "{", a, "}")
            }

            return "".concat(property, ":", value)
          })
        })
        .join(sep)
      : ""
  ]
}
