/*
  eslint-disable
    compat/compat,
    jsdoc/check-param-names
 */

import {
  assignProp,
  isObj,
  isUndef,
  merge,
  mergeArr
} from "../index.js"

/**
  Recursively merges own properties of source objects into a new empty
  object. Plain object properties are merged recursively. Source objects
  are applied from left to right. Subsequent sources overwrite property
  assignments of previous sources.

  @typedef {import ("..").PlainObject} PlainObject

  @param {... PlainObject | any} sources
  - The source objects.

  @returns {PlainObject | any}
    Returns `object`.
 */

export function mergeObj () {
  const sources = Array.prototype.slice.call(arguments)

  return sources.reduce(
    /**
      @typedef {import ("..").PlainObject} PlainObject

      @param {PlainObject} output

      @param {PlainObject} input

      @returns {PlainObject}
     */
    function (output, input) {
      return isObj(input)
        ? mergeArr(
          Object.getOwnPropertyNames(input),
          Object.getOwnPropertySymbols(input)
        ).reduce(
          /**
            @param {PlainObject} result

            @param {string | symbol} key

            @returns {PlainObject}
           */
          function (result, key) {
            const value = isUndef(input[key])
              ? input[key]
              : merge(result[key], input[key])

            return assignProp(result, input, key, value)
          },
          output
        )
        : input
    },
    {}
  )
}
