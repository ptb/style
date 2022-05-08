/* eslint-disable max-lines-per-function */

import ava from "ava"

import { defaultParams, parseFontFace } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseFontFace()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given a string as fontFamily", (t) => {
  const actual = parseFontFace({
    "property": "fontFamily",
    "value": "Helvetica"
  })

  const expect = [
    {
      "property": "fontFamily",
      "value": "Helvetica"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid font-face declaration (1)", (t) => {
  const actual = parseFontFace({
    "property": "fontFamily",
    "value": {
      "src": "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "src": "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
        },
        {
          "font-family": "c8ar46"
        }
      ],
      "emit": false,
      "identifier": "c8ar46",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "c8ar46"
    },
    {
      "block": [
        {
          "font-family": "c8ar46"
        }
      ],
      "conditional": {},
      "emit": true,
      "identifier": "c8ar46",
      "property": "fontFamily",
      "selectors": [[".c8ar46"]],
      "value": "c8ar46"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid font-face declaration (2)", (t) => {
  const actual = parseFontFace({
    "property": "fontFamily",
    "value": {
      "src": "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "src": "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
        },
        {
          "font-family": "c8025u"
        }
      ],
      "emit": false,
      "identifier": "c8025u",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "c8025u"
    },
    {
      "block": [
        {
          "font-family": "c8025u"
        }
      ],
      "conditional": {},
      "emit": true,
      "identifier": "c8025u",
      "property": "fontFamily",
      "selectors": [[".c8025u"]],
      "value": "c8025u"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid font-face declaration (3)", (t) => {
  const actual = parseFontFace({
    "property": "fontFamily",
    "value": {
      "fontFamily": "Avenir",
      "src": "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "font-family": "Avenir"
        },
        {
          "src": "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        }
      ],
      "emit": false,
      "identifier": "c8oyql",
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
      "conditional": {},
      "emit": true,
      "identifier": "c8oyql",
      "property": "fontFamily",
      "selectors": [[".c8oyql"]],
      "value": "Avenir"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid font-face declaration (4)", (t) => {
  const actual = parseFontFace({
    "property": "fontFamily",
    "value": {
      "fontFamily": "Avenir",
      "src": "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "font-family": "Avenir"
        },
        {
          "src": "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        }
      ],
      "emit": false,
      "identifier": "c8oyql",
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
      "conditional": {},
      "emit": true,
      "identifier": "c8oyql",
      "property": "fontFamily",
      "selectors": [[".c8oyql"]],
      "value": "Avenir"
    }
  ]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with fontFamily property and array value (1)",
  (t) => {
    const actual = parseFontFace({
      "property": "fontFamily",
      "value": [
        {
          "fontFamily": "Avenir",
          "src": "url('/fonts/avenir.woff') format('woff')"
        },
        "Helvetica",
        "Arial",
        {
          "src": "url('/fonts/font-2.woff') format('woff')"
        }
      ]
    })

    const expect = [
      {
        "block": [
          {
            "font-family": "Avenir"
          },
          {
            "src": "url('/fonts/avenir.woff') format('woff')"
          }
        ],
        "emit": false,
        "identifier": "c8hsep",
        "property": "fontFamily",
        "selectors": [["@font-face"]],
        "value": "Avenir"
      },
      {
        "block": [
          {
            "src": "url('/fonts/font-2.woff') format('woff')"
          },
          {
            "font-family": "c8hnbe"
          }
        ],
        "emit": false,
        "identifier": "c8hnbe",
        "property": "fontFamily",
        "selectors": [["@font-face"]],
        "value": "c8hnbe"
      },
      {
        "block": [
          {
            "font-family": "Avenir,Helvetica,Arial,c8hnbe"
          }
        ],
        "property": "fontFamily",
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
      }
    ]

    t.deepEqual(actual, expect)
  }
)
