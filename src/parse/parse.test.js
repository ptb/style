import ava from "ava"

import { flattenInput, parse } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parse()

  /** @type {any[]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an object with valid property and value", (t) => {
  const actual = parse({
    "input": { "background-color": "#f00", "display": "block" }
  })

  const expect = [
    {
      "conditional": {},
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#f00"
    },
    {
      "conditional": {},
      "emit": true,
      "property": "display",
      "selectors": undefined,
      "value": "block"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid property and value (2)", (t) => {
  flattenInput({
    "input": {
      "$unCite": {
        "display": "$displayArr",
        "my": 10
      }
    }
  })

  const actual = parse({
    "input": [
      { "$displayArr": ["$defDisplay", "inline-flex", "grid"] },
      {
        "$defDisplay": "inline-block",
        "$iconSize": 24,
        "$unCite": true,
        "background-color": "#0cf",
        "size": "$iconSize"
      }
    ]
  })

  const expect = [
    {
      "conditional": {},
      "emit": true,
      "property": "display",
      "selectors": undefined,
      "value": ["inline-block", "inline-flex", "grid"]
    },
    {
      "conditional": {},
      "emit": true,
      "property": "marginBottom",
      "selectors": undefined,
      "value": 10
    },
    {
      "conditional": {},
      "emit": true,
      "property": "marginTop",
      "selectors": undefined,
      "value": 10
    },
    {
      "conditional": {},
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#0cf"
    },
    {
      "conditional": {},
      "emit": true,
      "property": "height",
      "selectors": undefined,
      "value": 24
    },
    {
      "conditional": {},
      "emit": true,
      "property": "width",
      "selectors": undefined,
      "value": 24
    }
  ]

  t.deepEqual(actual, expect)
})
