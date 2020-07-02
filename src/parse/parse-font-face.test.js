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
          "font-family": "c46xq1"
        }
      ],
      "emit": false,
      "identifier": "c46xq1",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "c46xq1"
    },
    {
      "block": [
        {
          "font-family": "c46xq1"
        }
      ],
      "emit": true,
      "identifier": "c46xq1",
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c46xq1"]],
      "value": "c46xq1"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid font-face declaration (2)", (t) => {
  const actual = parseFontFace ({
    "property": "fontFamily",
    "value": {
      "src":
        "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "src":
            "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
        },
        {
          "font-family": "c49pnd"
        }
      ],
      "emit": false,
      "identifier": "c49pnd",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "c49pnd"
    },
    {
      "block": [
        {
          "font-family": "c49pnd"
        }
      ],
      "emit": true,
      "identifier": "c49pnd",
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c49pnd"]],
      "value": "c49pnd"
    }
  ]

  t.deepEqual (actual, expect)
})

/* eslint-disable max-lines-per-function */
ava ("given an object with valid font-face declaration (3)", (t) => {
  const actual = parseFontFace ({
    "property": "fontFamily",
    "value": {
      "fontFamily": "Avenir",
      "src":
        "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "font-family": "Avenir"
        },
        {
          "src":
            "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        }
      ],
      "emit": false,
      "identifier": "c4da4t",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "Avenir"
    },
    {
      "block": [
        {
          "font-family": "Avenir"
        }
      ],
      "emit": true,
      "identifier": "c4da4t",
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c4da4t"]],
      "value": "Avenir"
    }
  ]

  t.deepEqual (actual, expect)
})
/* eslint-enable max-lines-per-function */
