import ava from "ava"

import { getClassName } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getClassName()

  const expect = null

  t.deepEqual(actual, expect)
})

ava("given an object with identifier and emit true", (t) => {
  const actual = getClassName({
    "emit": true,
    "identifier": "jtz4h",
    "property": "backgroundColor",
    "selectors": [[".jtz4h"]],
    "value": "#0f0"
  })

  const expect = "jtz4h"

  t.deepEqual(actual, expect)
})

ava("given an object with identifier and emit false", (t) => {
  const actual = getClassName({
    "block": [
      {
        "src":
          "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
      },
      {
        "font-family": "c5xq1"
      }
    ],
    "emit": false,
    "identifier": "c5xq1",
    "input": {
      "fontFamily": {
        "src":
          "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
      }
    },
    "property": "fontFamily",
    "selectors": [["@font-face"]],
    "value": {
      "src":
        "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
    }
  })

  const expect = null

  t.deepEqual(actual, expect)
})
