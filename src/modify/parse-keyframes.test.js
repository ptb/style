import ava from "ava"

import { defaultParams, parseKeyframes } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseKeyframes()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given an object with valid keyframes declaration (1)", (t) => {
  const actual = parseKeyframes({
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
      "identifier": "mtmj0s",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "mtmj0s"]],
      "value": "mtmj0s"
    },
    {
      "block": [{ "animation-name": "mtmj0s" }],
      "conditional": {},
      "emit": true,
      "identifier": "mtmj0s",
      "property": "animationName",
      "selectors": [[".mtmj0s"]],
      "value": "mtmj0s"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid keyframes declaration (2)", (t) => {
  const actual = parseKeyframes({
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
      "identifier": "mt0lac",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "mt0lac"]],
      "value": "mt0lac"
    },
    {
      "block": [
        {
          "animation-name": "mt0lac"
        }
      ],
      "conditional": {},
      "emit": true,
      "identifier": "mt0lac",
      "property": "animationName",
      "selectors": [[".mt0lac"]],
      "value": "mt0lac"
    }
  ]

  t.deepEqual(actual, expect)
})
