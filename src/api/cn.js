/*
  eslint-disable
    jsdoc/check-param-names,
 */

import { isArr, isObj, isStr, toPairs, uniq } from "../index.js"

/**
  @typedef {string | boolean | undefined | null} Value

  @typedef {Record<string, any>} Mapping

  @typedef {ArgumentArray | Mapping | Value} Argument

  @typedef {Array<Argument>} ArgumentArray
 */

/**
  Conditionally joins class names.

  @param {ArgumentArray} arguments
  - The values to join.

  @returns {string}
    Returns a string of class names each separated by a space.
 */

export function cn () {
  return uniq(
    Array.prototype.slice
      .call(arguments)
      .reduce(function (output, input) {
        if (isStr(input)) {
          return output.concat(input.split(" "))
        }

        if (isArr(input)) {
          return output.concat(cn.apply(null, input))
        }

        if (isObj(input)) {
          if (input.toString === Object.prototype.toString) {
            toPairs(input).forEach(function ([key, val]) {
              if ({}.hasOwnProperty.call(input, key) && val) {
                output.push(key)
              }
            })

            return output
          }

          return output.concat(input.toString())
        }

        return output
      }, [])
      .filter(Boolean)
      .sort()
  ).join(" ")
}
