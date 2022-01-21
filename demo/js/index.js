import { canUseDom } from "../../src/style.js"
import { App } from "./app.js"
import { hydrate } from "./react-dom.js"
import { createElement as h } from "./react.js"

/** @type {string | null} */
let children = [
  `createElement(\n  "span",\n  {\n    className: css({\n      `,
  `\n    })\n  },\n  "Buy Now!"\n)`
].join("")

if (canUseDom() && window.location.search) {
  const params = new URLSearchParams(window.location.search)

  if (params.has("x")) {
    try {
      children = params.get("x")
    } catch (e) {
      console.error(e)
    }
  }
}

hydrate(h(App, { children }), document.getElementById("root"))
