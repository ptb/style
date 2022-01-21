import { App } from "./app.js"
import { hydrate } from "./react-dom.js"
import { createElement as h } from "./react.js"

hydrate(h(App), document.getElementById("root"))
