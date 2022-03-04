import { camelCase, isArr, isObj, isStr, merge } from "../index.js"
import postcss from "./postcss.js"

/**
  @typedef {import ("@ptb/style").PlainObject} PlainObject

  @typedef {import ("@ptb/style").StylesObject} StylesObject

  @typedef {import ("postcss").ChildNode} ChildNode
 */

/**
  Parse CSS stylesheet and convert to an equivalent JavaScript object.

  @param {string | ChildNode[] | PlainObject} input
  - String containing a CSS stylesheet or rulesets.
  - Array containing PostCSS `ChildNodes`.
  - Object containing PostCSS abstract syntax tree.

  @returns {StylesObject}
    Plain JavaScript object containing CSS styles.
 */

export function cssToJs (input) {
  if (isArr(input)) {
    return input.reduce(function (output, node) {
      switch (node.type) {
        case "decl": {
          const prop = camelCase(node.prop)

          return /** @type {StylesObject} */ (merge(output, {
            [prop]: node.value
          }))
        }
        case "rule": {
          const selector = node.selector.replace(/[\n\r\s]+/gu, " ")

          return /** @type {StylesObject} */ (merge(output, {
            [selector]: cssToJs(node.nodes)
          }))
        }
        case "atrule": {
          if (["media", "supports"].includes(node.name)) {
            const atrule = ["@", node.name, " ", node.params].join("")

            return /** @type {StylesObject} */ (merge(output, {
              [atrule]: cssToJs(node.nodes)
            }))
          }

          return output
        }
        default:
          return output
      }
    }, {})
  }

  if (isObj(input) && input.type === "root") {
    return cssToJs(input.nodes)
  }

  if (isStr(input)) {
    return cssToJs(
      postcss()
        .process(input, { "from": undefined })
        .sync()
        .root.toJSON()
    )
  }
  return {}
}
