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
        "animationName": { "from": { "opacity": 0 }, "to": { "opacity": 1 } },
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
      "value": "10px"
    },
    {
      "conditional": {},
      "emit": true,
      "property": "marginTop",
      "selectors": undefined,
      "value": "10px"
    },
    {
      "block": [{ "from": { "opacity": 0 } }, { "to": { "opacity": 1 } }],
      "emit": false,
      "identifier": "mtto2h",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "mtto2h"]],
      "value": "mtto2h"
    },
    {
      "block": [{ "animation-name": "mtto2h" }],
      "conditional": { "media": undefined },
      "emit": true,
      "identifier": "mtto2h",
      "property": "animationName",
      "selectors": [[".mtto2h"]],
      "value": "mtto2h"
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
      "value": "24px"
    },
    {
      "conditional": {},
      "emit": true,
      "property": "width",
      "selectors": undefined,
      "value": "24px"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid property and value (3)", (t) => {
  const actual = parse({
    "input": {
      "_": { "$red": "#f00", "bg": "$red" },
      "Md": { "$red": "rgba(255, 0, 0, 0.8)", "bg": "$red" },
      "Sm": { "$red": "rgb(255, 0, 0)", "bg": "$red" }
    }
  })

  const expect = [
    {
      "conditional": { "media": [] },
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#f00"
    },
    {
      "conditional": { "media": ["(minWidth:768px)"] },
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "rgba(255, 0, 0, 0.8)"
    },
    {
      "conditional": { "media": ["(maxWidth:767.98px)"] },
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "rgb(255, 0, 0)"
    }
  ]

  t.deepEqual(actual, expect)
})
