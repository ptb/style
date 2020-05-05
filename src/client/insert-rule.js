import {
  canUseDom,
  getIndex,
  getStyle,
  getStyleElement,
  isDef,
  rules
} from "../api/index.js"

/* istanbul ignore next */

export function insertRule (params = {}) {
  if (canUseDom) {
    const sheet = getStyleElement ().sheet
    const style = getStyle (params, true)

    if (isDef (sheet) && style) {
      const rule = style.replace (/[\n ]+/gu, "")
      const index = getIndex (rules, rule)

      rules.splice (index, 0, rule)
      sheet.insertRule (style, index)
    }
  }

  return params
}
