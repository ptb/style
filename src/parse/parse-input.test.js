import ava from "ava"

import { parseInput } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseInput()

  /** @type {any[]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an object with multiple properties and values", (t) => {
  const actual = parseInput({
    "input": {
      "backgroundColor": "#f00",
      "display": "block"
    }
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

ava(
  "given an object with multiple properties and values (2)",
  (t) => {
    const actual = parseInput({
      "emit": false,
      "input": [
        {
          "--red": "#f00",
          "-webkit-appearance": "none",
          "display": "block"
        },
        {
          "display": "inline-block"
        }
      ]
    })

    const expect = [
      {
        "conditional": {},
        "emit": false,
        "property": "-Red",
        "selectors": undefined,
        "value": "#f00"
      },
      {
        "conditional": {},
        "emit": false,
        "property": "WebkitAppearance",
        "selectors": undefined,
        "value": "none"
      },
      {
        "conditional": {},
        "emit": false,
        "property": "display",
        "selectors": undefined,
        "value": "inline-block"
      }
    ]

    t.deepEqual(actual, expect)
  }
)
