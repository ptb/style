import { isObj, merge, setStore, store } from "../index.js"

/**
  Returns styled-system shorthand properties and user provided `$properties`.

  @typedef {import ("..").PlainObject} PlainObject

  @returns {PlainObject}
    An object containing shorthand keys and the properties they represent.
 */

export function getShorthands () {
  setStore("")

  let variable = store.get("").get("$properties")

  variable = isObj(variable) ? variable.value : {}

  return merge(
    {
      "bg": "backgroundColor",
      "borderX": ["borderLeft", "borderRight"],
      "borderY": ["borderBottom", "borderTop"],
      "m": "margin",
      "mb": "marginBottom",
      "ml": "marginLeft",
      "mr": "marginRight",
      "mt": "marginTop",
      "mx": ["marginLeft", "marginRight"],
      "my": ["marginBottom", "marginTop"],
      "p": "padding",
      "pb": "paddingBottom",
      "pl": "paddingLeft",
      "pr": "paddingRight",
      "pt": "paddingTop",
      "px": ["paddingLeft", "paddingRight"],
      "py": ["paddingBottom", "paddingTop"],
      "size": ["height", "width"]
    },
    variable
  )
}
