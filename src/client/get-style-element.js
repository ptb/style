/**
  @returns {HTMLStyleElement}
 */

export const getStyleElement = (function () {
  /** @type {NodeListOf<HTMLStyleElement>} */
  let styles

  return function (media = "") {
    const attr = "data-creator"
    const value = "@ptb/style"

    const query = "style[" + attr + "='" + value + "']"

    if (typeof styles === "undefined") {
      styles = document.querySelectorAll(query)
    }

    let style

    for (style of styles) {
      if (style.media === media) {
        return style
      }
    }

    style = document.createElement("style")
    style.setAttribute(attr, value)

    if (media.length) {
      style.media = media
    }

    document.head.appendChild(style)

    styles = document.querySelectorAll(query)

    return style
  }
})()
