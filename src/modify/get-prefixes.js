import { isObj, merge, setStore, store } from "../index.js"

/**
  Returns default prefix strings and user provided prefixes.

  @typedef {import ("..").PlainObject} PlainObject

  @param {string} [media]
  - Media query string.

  @returns {PlainObject}
    An object containing prefix strings.
 */

export function getPrefixes (media = "") {
  const Moz = "Moz-"
  const Ms = "Ms-"
  const O = "O-"
  const Webkit = "Webkit-"

  setStore(media)

  const variable = store.get(media).get("$prefixes")

  return merge(
    {
      "appearance": [Webkit, Moz],
      "hyphens": [Webkit, Ms],
      "tabSize": [Moz, O],
      "userSelect": [Webkit, Moz, Ms]
    },
    isObj(variable) ? variable.value : {}
  )
}
