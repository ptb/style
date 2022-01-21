import {
  defaultParams,
  get,
  getMedia,
  isArr,
  isObj,
  isVariable,
  merge,
  setStore,
  store
} from "../index.js"

/**
  Set the variable `property` in the store.

  @typedef {import ("..").Params} Params

  @typedef {import ("..").PlainObject} PlainObject

  @param {Params} params
  - This project's common exchange CSS style object.

  @returns {any}
    The stored value for this variable.
 */

export function setVariable (params = defaultParams) {
  const property = params.property
  const value = params.value

  if (isVariable(property, true) && value !== true) {
    const media = getMedia(get(params, "conditional.media"))

    setStore(media)

    let item = store.get(media).get(property)

    if (isObj(item)) {
      item = isArr(value)
        ? merge(item, { "value": null }, params)
        : merge(item, params)
    } else {
      item = params
    }

    store.get(media).set(property, item)
  }

  return {}
}
