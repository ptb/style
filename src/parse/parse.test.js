import ava from "ava"
import { parse } from "./parse.js"

ava ("given undefined arguments", (t) => {
  const actual = parse ()

  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an object with valid property and value", (t) => {
  const actual = parse ({
    "input": {
      "background-color": "#f00",
      "display": "block"
    }
  })

  const expect = [
    {
      "block": [
        {
          "background-color": "#f00"
        }
      ],
      "emit": true,
      "identifier": "jtx2a9",
      "input": {
        "background-color": "#f00"
      },
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".jtx2a9"]],
      "value": "#f00"
    },
    {
      "block": [
        {
          "display": "block"
        }
      ],
      "emit": true,
      "identifier": "drztx9",
      "input": {
        "display": "block"
      },
      "media": "",
      "property": "display",
      "selectors": [[".drztx9"]],
      "value": "block"
    }
  ]

  t.deepEqual (actual, expect)
})

/* eslint-disable max-lines-per-function */
ava ("given an object with a media declaration", (t) => {
  /* eslint-disable sort-keys */
  const actual = parse ({
    "input": {
      "@media (min-width: 768px)": {
        "color": "#f00",
        "fontFamily": "sans-serif",
        "@media screen": {
          "backgroundColor": ["rgba(0, 0, 0, 0.9)", "#111"]
        }
      }
    }
  })
  /* eslint-enable sort-keys */

  const expect = [
    {
      "block": [
        {
          "color": "#f00"
        }
      ],
      "emit": true,
      "identifier": "jktdpi",
      "input": {
        "color": "#f00"
      },
      "media": "(min-width: 768px)",
      "property": "color",
      "selectors": [[".jktdpi"]],
      "value": "#f00"
    },
    {
      "block": [
        {
          "font-family": "sans-serif"
        }
      ],
      "emit": true,
      "identifier": "c5zr5i",
      "input": {
        "fontFamily": "sans-serif"
      },
      "media": "(min-width: 768px)",
      "property": "fontFamily",
      "selectors": [[".c5zr5i"]],
      "value": "sans-serif"
    },
    {
      "block": [
        {
          "background-color": "rgba(0, 0, 0, 0.9)"
        },
        {
          "background-color": "#111"
        }
      ],
      "emit": true,
      "identifier": "jtcne4",
      "input": {
        "backgroundColor": ["rgba(0, 0, 0, 0.9)", "#111"]
      },
      "media": "(min-width: 768px) and screen",
      "property": "backgroundColor",
      "selectors": [[".jtcne4"]],
      "value": ["rgba(0, 0, 0, 0.9)", "#111"]
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with a complex fontFamily declaration", (t) => {
  const actual = parse ({
    "input": {
      "fontFamily": [
        {
          "fontFamily": "Avenir",
          "src":
            "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        },
        {
          "src": "url('/fonts/font.woff2') format ('woff2')"
        },
        "sans-serif"
      ]
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
      "identifier": "c5da4t",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "Avenir"
    },
    {
      "block": [
        {
          "src": "url('/fonts/font.woff2') format ('woff2')"
        },
        {
          "font-family": "c5oz34"
        }
      ],
      "emit": false,
      "identifier": "c5oz34",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "c5oz34"
    },
    {
      "block": [
        {
          "font-family": "Avenir,c5oz34,sans-serif"
        }
      ],
      "emit": true,
      "identifier": "c5rmvq",
      "input": {
        "fontFamily": [
          {
            "fontFamily": "Avenir",
            "src":
              "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
          },
          {
            "src": "url('/fonts/font.woff2') format ('woff2')"
          },
          "sans-serif"
        ]
      },
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c5rmvq"]],
      "value": [
        {
          "fontFamily": "Avenir",
          "src":
            "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        },
        {
          "fontFamily": "c5oz34",
          "src": "url('/fonts/font.woff2') format ('woff2')"
        },
        "sans-serif"
      ]
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with a complex keyframes declaration", (t) => {
  /* eslint-disable sort-keys */
  const actual = parse ({
    "input": {
      "animationName": "slide-left",
      "@media (min-width: 768px)": {
        "animationName": {
          "0%": {
            "opacity": 0
          },
          "100%": {
            "opacity": 1
          }
        }
      }
    }
  })
  /* eslint-enable sort-keys */

  const expect = [
    {
      "block": [
        {
          "animation-name": "slide-left"
        }
      ],
      "emit": true,
      "identifier": "m7o57v",
      "input": {
        "animationName": "slide-left"
      },
      "media": "",
      "property": "animationName",
      "selectors": [[".m7o57v"]],
      "value": "slide-left"
    },
    {
      "block": [
        {
          "0%": {
            "opacity": 0
          }
        },
        {
          "100%": {
            "opacity": 1
          }
        }
      ],
      "emit": false,
      "identifier": "m7tcxh",
      "input": {
        "animationName": {
          "0%": {
            "opacity": 0
          },
          "100%": {
            "opacity": 1
          }
        }
      },
      "media": "",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "m7tcxh"]],
      "value": "m7tcxh"
    },
    {
      "block": [
        {
          "animation-name": "m7tcxh"
        }
      ],
      "emit": true,
      "identifier": "m7tcxh",
      "input": {
        "animationName": {
          "0%": {
            "opacity": 0
          },
          "100%": {
            "opacity": 1
          }
        }
      },
      "media": "(min-width: 768px)",
      "property": "animationName",
      "selectors": [[".m7tcxh"]],
      "value": "m7tcxh"
    }
  ]

  t.deepEqual (actual, expect)
})
/* eslint-disable max-lines-per-function */

ava ("given an object with placeholder and selectors", (t) => {
  const actual = parse ({
    "input": {
      "%figure": true,
      "%figure > ul": {
        "listStyleType": "none"
      },
      ":hover": {
        "[class^=product]&": {
          "backgroundColor": "#0f0"
        },
        "color": "#f00"
      },
      "color": "#f00"
    }
  })

  const expect = [
    {
      "block": [{ "%figure": true }],
      "emit": true,
      "identifier": "afh3qz",
      "input": { "%figure": true },
      "media": "",
      "property": "%figure",
      "selectors": [],
      "value": true
    },
    {
      "block": [{ "list-style-type": "none" }],
      "emit": false,
      "identifier": "eomq80",
      "input": { "listStyleType": "none" },
      "media": "",
      "property": "listStyleType",
      "selectors": [[".afh3qz", ">", "ul"]],
      "value": "none"
    },
    {
      "block": [{ "background-color": "#0f0" }],
      "emit": false,
      "identifier": "jtxowj",
      "input": { "backgroundColor": "#0f0" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [["[class^=product]", ":hover"]],
      "value": "#0f0"
    },
    {
      "block": [{ "color": "#f00" }],
      "emit": true,
      "identifier": "jk7dzh",
      "input": { "color": "#f00" },
      "media": "",
      "property": "color",
      "selectors": [[".jk7dzh", ":hover"]],
      "value": "#f00"
    },
    {
      "block": [{ "color": "#f00" }],
      "emit": true,
      "identifier": "jkx2a9",
      "input": { "color": "#f00" },
      "media": "",
      "property": "color",
      "selectors": [[".jkx2a9"]],
      "value": "#f00"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with bare element selector", (t) => {
  const actual = parse ({
    "input": {
      "body": {
        "margin": 0
      },
      "margin": 0
    }
  })

  const expect = [
    {
      "block": [{ "margin": 0 }],
      "emit": false,
      "identifier": "e4e838",
      "input": { "margin": 0 },
      "media": "",
      "property": "margin",
      "selectors": [["body"]],
      "value": 0
    },
    {
      "block": [{ "margin": 0 }],
      "emit": true,
      "identifier": "e4f82s",
      "input": { "margin": 0 },
      "media": "",
      "property": "margin",
      "selectors": [[".e4f82s"]],
      "value": 0
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with 'margin' property and integer value (1)", (t) => {
  const actual = parse ({
    "input": {
      "margin": 10
    }
  })

  const expect = [
    {
      "block": [{ "margin": "10px" }],
      "emit": true,
      "identifier": "e4634t",
      "input": { "margin": 10 },
      "media": "",
      "property": "margin",
      "selectors": [[".e4634t"]],
      "value": "10px"
    }
  ]

  t.deepEqual (actual, expect)
})
