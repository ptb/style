/*
  eslint-disable
    max-lines-per-function
 */

import ava from "ava"

import { flattenInput, parse } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parse()

  /** @type {any[]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an object with valid property and value", (t) => {
  const actual = parse(
    {
      "input": { "background-color": "#f00", "display": "block" }
    },
    "",
    true
  )

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "conditional": {},
      "emit": true,
      "identifier": "kclzxd",
      "property": "backgroundColor",
      "selectors": [[".kclzxd"]],
      "value": "#f00"
    },
    {
      "block": [{ "display": "block" }],
      "conditional": {},
      "emit": true,
      "identifier": "du07kg",
      "property": "display",
      "selectors": [[".du07kg"]],
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
        "fontFamily": "$defFont",
        "my": 10
      }
    }
  })

  const actual = parse(
    {
      "input": [
        { "$displayArr": ["$defDisplay", "inline-flex", "grid"] },
        {
          "$defDisplay": "inline-block",
          "$defFont": [
            {
              "fontFamily": "Avenir",
              "src": "url('/fonts/avenir.woff') format('woff')"
            },
            "Helvetica",
            "Arial",
            { "src": "url('/fonts/font-2.woff') format('woff')" }
          ],
          "$iconSize": 24,
          "$unCite": true,
          "animationName": { "from": { "opacity": 0 }, "to": { "opacity": 1 } },
          "background-color": "#0cf",
          "size": "$iconSize"
        }
      ]
    },
    "abc",
    true
  )

  const expect = [
    {
      "block": [
        { "display": "inline-block" },
        { "display": "inline-flex" },
        { "display": "grid" }
      ],
      "conditional": {},
      "emit": true,
      "identifier": "duuuy1",
      "property": "display",
      "selectors": [[".duuuy1"]],
      "value": ["inline-block", "inline-flex", "grid"]
    },
    {
      "block": [
        { "font-family": "Avenir" },
        { "src": "url('/fonts/avenir.woff') format('woff')" }
      ],
      "emit": false,
      "identifier": "c8hsep",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "Avenir"
    },
    {
      "block": [
        { "src": "url('/fonts/font-2.woff') format('woff')" },
        { "font-family": "c8hnbe" }
      ],
      "emit": false,
      "identifier": "c8hnbe",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "c8hnbe"
    },
    {
      "block": [{ "font-family": "Avenir,Helvetica,Arial,c8hnbe" }],
      "conditional": {},
      "emit": true,
      "identifier": "c8152m",
      "property": "fontFamily",
      "selectors": [[".c8152m"]],
      "value": [
        {
          "fontFamily": "Avenir",
          "src": "url('/fonts/avenir.woff') format('woff')"
        },
        "Helvetica",
        "Arial",
        {
          "fontFamily": "c8hnbe",
          "src": "url('/fonts/font-2.woff') format('woff')"
        }
      ]
    },
    {
      "block": [{ "margin-bottom": "10px" }],
      "conditional": {},
      "emit": true,
      "identifier": "ehgimk",
      "property": "marginBottom",
      "selectors": [[".ehgimk"]],
      "value": "10px"
    },
    {
      "block": [{ "margin-top": "10px" }],
      "conditional": {},
      "emit": true,
      "identifier": "efgimk",
      "property": "marginTop",
      "selectors": [[".efgimk"]],
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
      "conditional": {},
      "emit": true,
      "identifier": "mtto2h",
      "property": "animationName",
      "selectors": [[".mtto2h"]],
      "value": "mtto2h"
    },
    {
      "block": [{ "background-color": "#0cf" }],
      "conditional": {},
      "emit": true,
      "identifier": "kcyh5w",
      "property": "backgroundColor",
      "selectors": [[".kcyh5w"]],
      "value": "#0cf"
    },
    {
      "block": [{ "height": "24px" }],
      "conditional": {},
      "emit": true,
      "identifier": "e0y5o3",
      "property": "height",
      "selectors": [[".e0y5o3"]],
      "value": "24px"
    },
    {
      "block": [{ "width": "24px" }],
      "conditional": {},
      "emit": true,
      "identifier": "dzy5o3",
      "property": "width",
      "selectors": [[".dzy5o3"]],
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
