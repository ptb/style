import ava from "ava"

import { parse } from "../index.js"

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
