import ava from "ava"

import { defaultParams, parseSelectors } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseSelectors()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given an object with valid property and value", (t) => {
  const actual = parseSelectors({
    "property": "@media (max-width: 767px)",
    "value": { "background-color": "#f0f" }
  })

  const expect = [
    {
      "property": "@media (max-width: 767px)",
      "value": { "background-color": "#f0f" }
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid pseudo-class selector", (t) => {
  const actual = parseSelectors({
    "property": ":hover",
    "value": { "font-family": "Helvetica" }
  })

  const expect = [
    {
      "conditional": { "media": undefined },
      "emit": false,
      "property": "fontFamily",
      "selectors": undefined,
      "value": "Helvetica"
    },
    {
      "conditional": { "media": undefined },
      "emit": true,
      "property": "fontFamily",
      "selectors": [[":hover"]],
      "value": "Helvetica"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid attribute selector", (t) => {
  const actual = parseSelectors({
    "property": "[aria-expanded=true]",
    "value": { "backgroundColor": "#f00" }
  })

  const expect = [
    {
      "conditional": { "media": undefined },
      "emit": false,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#f00"
    },
    {
      "conditional": { "media": undefined },
      "emit": false,
      "property": "backgroundColor",
      "selectors": [["[aria-expanded=true]"]],
      "value": "#f00"
    }
  ]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with valid placeholder with attribute selector",
  (t) => {
    const actual = parseSelectors({
      "property": "%fieldset[aria-expanded=true]",
      "value": { "backgroundColor": "#f00" }
    })

    const expect = [
      {
        "conditional": { "media": undefined },
        "emit": false,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#f00"
      },
      {
        "conditional": { "media": undefined },
        "emit": false,
        "property": "backgroundColor",
        "selectors": [[".osfpgs", "[aria-expanded=true]"]],
        "value": "#f00"
      }
    ]

    t.deepEqual(actual, expect)
  }
)
