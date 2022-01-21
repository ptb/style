import {
  get,
  getVariables,
  isObj,
  isStr,
  isVariable,
  setStore,
  store
} from "../index.js"

/**
  Replace `$` variable(s) with stored value.

  @typedef {import ("..").Params} Params

  @param {any} input
  - The value to process.

  @param {string} [media]
  - Media query string.

  @returns {any}
    Returns value with variable replaced with stored value.
 */

export function replaceVariables (input, media = "") {
  if (isVariable(input, false)) {
    setStore(media)

    const variables = /** @type {RegExpMatchArray} */ (getVariables(
      input
    ))

    return variables.reduce(function (result, variable) {
      const paths = variable.split(".")
      const item = store.get(media).get(paths.shift())

      if (isObj(item)) {
        const value = (/\./u).test(variable)
          ? get(item.value, paths)
          : item.value

        if (isStr(value)) {
          return result.replace(variable, value)
        }

        if (isVariable(input, true)) {
          return value
        }
      }

      return result
    }, input)
  }

  return input
}
