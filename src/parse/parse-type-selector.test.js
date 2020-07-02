import ava from "ava"
import { parseTypeSelector } from "./parse-type-selector.js"

ava ("given undefined arguments", (t) => {
  const actual = parseTypeSelector ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with bare element selector", (t) => {
  const actual = parseTypeSelector ({
    "property": "body",
    "value": {
      "backgroundColor": "#f00"
    }
  })

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "emit": false,
      "identifier": "jtsem7",
      "input": { "backgroundColor": "#f00" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [["body"]],
      "value": "#f00"
    }
  ]

  t.deepEqual (actual, expect)
})
