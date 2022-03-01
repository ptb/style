import { App } from "./app.jsx"
import { StrictMode } from "./jsx-runtime"
import { hydrate } from "./react-dom.js"

hydrate(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
)
