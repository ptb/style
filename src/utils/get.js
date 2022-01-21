import { isArr, isObj, isStr } from "../index.js"

/**
  Gets the value at path of object. If the resolved value is undefined,
  the defaultValue is returned in its place.

  @param {object} object
  - The object to query.

  @param {string | string[]} path
  - The path of the property to get.

  @param {any} [defaultValue]
  - The value returned for undefined resolved values.

  @returns {any}
    Returns the resolved value.
 */

export function get (object, path, defaultValue) {
  let item

  if (isObj(object)) {
    item = object

    const paths = isStr(path) ? path.split(".") : path

    while (isObj(item) && isArr(paths) && paths.length > 0) {
      const key = paths.shift()

      if (
        isObj(item) &&
        isStr(key) &&
        Object.prototype.hasOwnProperty.call(item, key)
      ) {
        item = item[key]
      } else {
        return defaultValue
      }
    }
  }

  return item
}
