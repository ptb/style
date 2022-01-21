import ava from "ava"

import { defaultParams, parseSelectors } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseSelectors()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given an object with valid selectors", (t) => {
  const actual = parseSelectors({
    "property": "#root %stuff",
    "value": {
      "#products::after,%figure > &,#body~&+stuff": {
        "background-color": "#f0f",
        "display": "grid"
      }
    }
  })

  const expect = [
    {
      "conditional": { "media": undefined },
      "emit": false,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#f0f"
    },
    {
      "conditional": { "media": undefined },
      "emit": false,
      "property": "display",
      "selectors": undefined,
      "value": "grid"
    },
    {
      "conditional": { "media": undefined },
      "emit": false,
      "property": "backgroundColor",
      "selectors": [
        ["#root", " ", ".os1x5c", " ", "#products", "::after"],
        [".osgt00", ">", "#root", " ", ".os1x5c"],
        ["#body", "~", "#root", " ", ".os1x5c", "+", "stuff"]
      ],
      "value": "#f0f"
    },
    {
      "conditional": { "media": undefined },
      "emit": false,
      "property": "display",
      "selectors": [
        ["#root", " ", ".os1x5c", " ", "#products", "::after"],
        [".osgt00", ">", "#root", " ", ".os1x5c"],
        ["#body", "~", "#root", " ", ".os1x5c", "+", "stuff"]
      ],
      "value": "grid"
    }
  ]

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

ava("given an object with valid placeholder selector (2)", (t) => {
  const actual = parseSelectors({
    "property": "%fieldset",
    "value": { "&[aria-expanded=true]": { "backgroundColor": "#f00" } }
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
