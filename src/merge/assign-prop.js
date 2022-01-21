/**
  Assigns `key` of `target` to `value`.

  @typedef {import ("..").PlainObject} PlainObject

  @param {PlainObject} target
  - The destination object.

  @param {PlainObject} source
  - The source object.

  @param {string | symbol} key
  - The property name to assign.

  @param {any} value
  - The property value to assign.

  @returns {PlainObject}
    Returns `object`.
 */

export function assignProp (target, source, key, value) {
  if ({}.propertyIsEnumerable.call(source, key)) {
    target[key] = value
  } else {
    Object.defineProperty(target, key, {
      "configurable": true,
      "enumerable": false,
      "value": value,
      "writable": true
    })
  }

  return target
}
