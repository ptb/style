import ava from "ava"
import { parseKeyframes } from "./parse-keyframes.js"

ava ("given undefined arguments", (t) => {
  const actual = parseKeyframes ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with valid keyframes declaration (1)", (t) => {
  const actual = parseKeyframes ({
    "property": "animationName",
    "value": {
      "0%": {
        "opacity": 0
      },
      "100%": {
        "opacity": 1
      }
    }
  })

  const expect = [
    {
      "block": [{ "0%": { "opacity": 0 } }, { "100%": { "opacity": 1 } }],
      "emit": false,
      "identifier": "m6fokn",
      "media": "",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "m6fokn"]],
      "value": "m6fokn"
    },
    {
      "block": [{ "animation-name": "m6fokn" }],
      "emit": true,
      "identifier": "m6fokn",
      "media": "",
      "property": "animationName",
      "selectors": [[".m6fokn"]],
      "value": "m6fokn"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid keyframes declaration (2)", (t) => {
  const actual = parseKeyframes ({
    "property": "animationName",
    "value": {
      "0%": {
        "opacity": 1
      },
      "100%": {
        "opacity": 0
      }
    }
  })

  const expect = [
    {
      "block": [{ "0%": { "opacity": 1 } }, { "100%": { "opacity": 0 } }],
      "emit": false,
      "identifier": "m6anlz",
      "media": "",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "m6anlz"]],
      "value": "m6anlz"
    },
    {
      "block": [
        {
          "animation-name": "m6anlz"
        }
      ],
      "emit": true,
      "identifier": "m6anlz",
      "media": "",
      "property": "animationName",
      "selectors": [[".m6anlz"]],
      "value": "m6anlz"
    }
  ]

  t.deepEqual (actual, expect)
})
