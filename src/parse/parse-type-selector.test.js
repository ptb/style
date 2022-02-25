import ava from "ava"

import { defaultParams, parseTypeSelector } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseTypeSelector()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given an object with bare element selector (1)", (t) => {
  const actual = parseTypeSelector({
    "property": "body",
    "value": {
      "backgroundColor": "#f00"
    }
  })

  const expect = [
    {
      "conditional": {},
      "emit": false,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#f00"
    },
    {
      "conditional": {},
      "emit": false,
      "property": "backgroundColor",
      "selectors": [["body"]],
      "value": "#f00"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with bare element selector (2)", (t) => {
  const actual = parseTypeSelector({
    "property": "body",
    "value": {
      "backgroundColor": {
        "Sm": "#f00"
      }
    }
  })

  const expect = [
    {
      "conditional": { "media": ["(maxWidth:767.98px)"] },
      "emit": false,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#f00"
    },
    {
      "conditional": { "media": ["(maxWidth:767.98px)"] },
      "emit": false,
      "property": "backgroundColor",
      "selectors": [["body"]],
      "value": "#f00"
    }
  ]

  t.deepEqual(actual, expect)
})
