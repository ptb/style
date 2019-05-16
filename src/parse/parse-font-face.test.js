import ava from "ava"
import { parseFontFace } from "./parse-font-face.js"

ava ("given undefined arguments", (t) => {
  const actual = parseFontFace ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with valid font-face declaration (1)", (t) => {
  const actual = parseFontFace ({
    "property": "fontFamily",
    "value": {
      "src":
        "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "src":
            "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
        },
        {
          "font-family": "c5xq1"
        }
      ],
      "emit": false,
      "identifier": "c5xq1",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "src":
          "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
      }
    },
    {
      "block": [
        {
          "font-family": "c5xq1"
        }
      ],
      "emit": true,
      "identifier": "c5xq1",
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c5xq1"]],
      "value": {
        "src":
          "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
      }
    }
  ]

  t.deepEqual (actual, expect)
})
