import { isArr } from "../index.js"

/**
  Merges values of `target` and `source` arrays. Does not change the
  existing arrays, but instead returns the values as shallow copies.
  If the `target` is not an array, only the `source` is returned.

  @param {any} target
  - The first array.

  @param {any} source
  - The second array.

  @returns {any | any[]}
    Returns a new array with values from `target` and `source` arrays.
 */

export function mergeArr (target, source) {
  return isArr(target) && isArr(source)
    ? target.concat(source)
    : source
}
