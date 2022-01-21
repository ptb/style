/*
  eslint-disable
    max-lines-per-function
 */

import ava from "ava"

import {
  defaultParams,
  parseConditional,
  setVariable
} from "../index.js"

ava.serial("given undefined arguments", (t) => {
  const actual = parseConditional()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava.serial("given an object with valid media declaration", (t) => {
  const actual = parseConditional({
    "property": "@media (min-width: 768px)",
    "value": { "bg": "#000" }
  })

  const expect = [
    {
      "conditional": {
        "media": ["(minWidth:768px)"]
      },
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#000"
    }
  ]

  t.deepEqual(actual, expect)
})

ava.serial(
  "given object with 'margin' property and object value",
  (t) => {
    setVariable({
      "property": "$media",
      "value": { "lg": "(minWidth:1024px)", "xs": "(maxWidth:639.98px)" }
    })

    const actual = parseConditional({
      "value": { "_": { "margin": 20 }, "xs": { "margin": 10 } }
    })

    const expect = [
      {
        "conditional": { "media": [] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": 20
      },
      {
        "conditional": { "media": ["(maxWidth:639.98px)"] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": 10
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'bg' and media query object",
  (t) => {
    const actual = parseConditional({
      "conditional": { "media": [] },
      "property": "@media (min-width: 768px)",
      "value": { "bg": "#0f0" }
    })

    const expect = [
      {
        "conditional": { "media": ["(minWidth:768px)"] },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#0f0"
      }
    ]

    t.deepEqual(actual, expect)
  }
)
