import { hydrate } from "../../demo/js/react-dom.js"
import { createElement as h } from "../../demo/js/react.js"
import { App } from "./app.js"

hydrate(h(App), document.getElementById("root"))
