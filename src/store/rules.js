import {
  canUseDom,
  getStyleElement
} from "../api/index.js"

export const rules = (function (RULES) {
  return RULES
}) (canUseDom
    ? Array.prototype.slice
      .call (getStyleElement ().sheet.cssRules)
      .map (function ({ cssText }) {
        return cssText.replace (/[\n ]+/gu, "")
      })
    : []
  )
