import ava from "ava"

import {
  defaultParams,
  flattenInput,
  parseFallbacks
} from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseFallbacks()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with backgroundImage property and array value (1)",
  (t) => {
    const actual = parseFallbacks({
      "property": "backgroundImage",
      "value": [
        "url(https://mdn.mozillademos.org/files/11305/firefox.png)",
        "url(https://mdn.mozillademos.org/files/11307/bubbles.png)",
        "linear-gradient(to right, rgba(30, 75, 115, 1)",
        "rgba(255, 255, 255, 0))"
      ]
    })

    const expect = [
      {
        "block": [
          {
            "background-image":
              "url(https://mdn.mozillademos.org/files/11305/firefox.png),url(https://mdn.mozillademos.org/files/11307/bubbles.png),linear-gradient(to right, rgba(30, 75, 115, 1),rgba(255, 255, 255, 0))"
          }
        ],
        "property": "backgroundImage",
        "value": [
          "url(https://mdn.mozillademos.org/files/11305/firefox.png)",
          "url(https://mdn.mozillademos.org/files/11307/bubbles.png)",
          "linear-gradient(to right, rgba(30, 75, 115, 1)",
          "rgba(255, 255, 255, 0))"
        ]
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava("given an object with display property and array value", (t) => {
  const actual = parseFallbacks({
    "property": "display",
    "value": ["block", "flex", "grid"]
  })

  const expect = [
    {
      "block": [
        {
          "display": "block"
        },
        {
          "display": "flex"
        },
        {
          "display": "grid"
        }
      ],
      "property": "display",
      "value": ["block", "flex", "grid"]
    }
  ]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with display property and array value (2)",
  (t) => {
    flattenInput({ "input": { "$default": "inline-block" } })

    const actual = parseFallbacks({
      "property": "display",
      "value": ["$default", "flex", "grid"]
    })

    const expect = [
      {
        "block": [
          {
            "display": "inline-block"
          },
          {
            "display": "flex"
          },
          {
            "display": "grid"
          }
        ],
        "property": "display",
        "value": ["inline-block", "flex", "grid"]
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava("given an object with prefixed property", (t) => {
  const actual = parseFallbacks({
    "property": "userSelect",
    "value": "none"
  })

  const expect = [
    {
      "block": [
        { "-webkit-user-select": "none" },
        { "-moz-user-select": "none" },
        { "-ms-user-select": "none" },
        { "user-select": "none" }
      ],
      "property": "userSelect",
      "value": "none"
    }
  ]

  t.deepEqual(actual, expect)
})
