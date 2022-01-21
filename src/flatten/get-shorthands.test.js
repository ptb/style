import ava from "ava"

import { getShorthands, setVariable } from "../index.js"

ava("given base shorthands", (t) => {
  const actual = getShorthands()

  const expect = {
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
  }

  t.deepEqual(actual, expect)
})

ava("given extended shorthands", (t) => {
  setVariable({
    "property": "$properties",
    "value": {
      "us": ["userSelect", "WebkitUserSelect"]
    }
  })

  const actual = getShorthands()

  const expect = {
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
    "size": ["height", "width"],
    "us": ["userSelect", "WebkitUserSelect"]
  }

  t.deepEqual(actual, expect)
})
