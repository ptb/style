import { getStyleElement } from "../api/index.js"

export const rules = (function (RULES) {
  return RULES
}) (Boolean (
  typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
) ? Array.prototype.slice
      .call (getStyleElement ().sheet.cssRules)
      .map (function ({ cssText }) {
        return cssText.replace (/[\n ]+/gu, "")
      })
    : []
  )
