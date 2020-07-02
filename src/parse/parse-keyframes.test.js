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
      "identifier": "m7fokn",
      "media": "",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "m7fokn"]],
      "value": "m7fokn"
    },
    {
      "block": [{ "animation-name": "m7fokn" }],
      "emit": true,
      "identifier": "m7fokn",
      "media": "",
      "property": "animationName",
      "selectors": [[".m7fokn"]],
      "value": "m7fokn"
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
      "identifier": "m7anlz",
      "media": "",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "m7anlz"]],
      "value": "m7anlz"
    },
    {
      "block": [
        {
          "animation-name": "m7anlz"
        }
      ],
      "emit": true,
      "identifier": "m7anlz",
      "media": "",
      "property": "animationName",
      "selectors": [[".m7anlz"]],
      "value": "m7anlz"
    }
  ]

  t.deepEqual (actual, expect)
})
