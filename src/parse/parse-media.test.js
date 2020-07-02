import ava from "ava"
import { parseMedia } from "./parse-media.js"

ava ("given undefined arguments", (t) => {
  const actual = parseMedia ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with valid media declaration", (t) => {
  const actual = parseMedia ({
    "property": "@media (min-width: 768px)",
    "value": {
      "background-color": "#000"
    }
  })

  const expect = [
    {
      "block": [
        {
          "background-color": "#000"
        }
      ],
      "emit": true,
      "identifier": "jsb0ac",
      "input": {
        "background-color": "#000"
      },
      "media": "(min-width: 768px)",
      "property": "backgroundColor",
      "selectors": [[".jsb0ac"]],
      "value": "#000"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with complex valid media declaration", (t) => {
  const actual = parseMedia ({
    "property": "@media (min-width: 768px)",
    "value": {
      "@media (-webkit-min-device-pixel-ratio: 2)": {
        "background-color": "#000"
      }
    }
  })

  const expect = [
    {
      "block": [
        {
          "background-color": "#000"
        }
      ],
      "emit": true,
      "identifier": "jsfnzy",
      "input": {
        "background-color": "#000"
      },
      "media": "(min-width: 768px) and (-webkit-min-device-pixel-ratio: 2)",
      "property": "backgroundColor",
      "selectors": [[".jsfnzy"]],
      "value": "#000"
    }
  ]

  t.deepEqual (actual, expect)
})
