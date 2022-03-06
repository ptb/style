/* eslint-disable max-lines-per-function  */

import ava from "ava"

import { create, css } from "../index.js"

ava("given an object with simple declarations", (t) => {
  const actual = create({
    "banner": {
      "display": "block",
      "width": "80%"
    },
    "product": {
      "color": "#f00",
      "display": ["block", "flex", "grid"]
    }
  })

  const expect = {
    "banner": "du07kg dz103d",
    "product": "dur7z8 k0lzxd"
  }

  t.deepEqual(actual, expect)
})

ava("given an object with simple declarations 2", (t) => {
  const actual = create({
    "banner": [
      {
        "display": "flex",
        "width": "80%"
      },
      {
        "display": "block"
      }
    ],
    "product": {
      "color": "#f00",
      "display": ["block", "flex", "grid"]
    }
  })

  const expect = {
    "banner": "du07kg dz103d",
    "product": "dur7z8 k0lzxd"
  }

  t.deepEqual(actual, expect)
})

ava(
  "given an object with multiple 'fontFamily' declarations",
  (t) => {
    const fonts = {
      "avenir300": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "normal",
          "fontWeight": 300,
          "src": "url(/fonts/avenir-300-light-normal.woff) format(woff)"
        }
      },
      "avenir300i": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "italic",
          "fontWeight": 300,
          "src":
            "url(/fonts/avenir-300-light-oblique.woff) format(woff)"
        }
      },
      "avenir400": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "normal",
          "fontWeight": 400,
          "src": "url(/fonts/avenir-400-book-normal.woff) format(woff)"
        }
      },
      "avenir400i": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "italic",
          "fontWeight": 400,
          "src": "url(/fonts/avenir-400-book-oblique.woff) format(woff)"
        }
      },
      "avenir500": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "normal",
          "fontWeight": 500,
          "src": "url(/fonts/avenir-500-roman-normal.woff) format(woff)"
        }
      },
      "avenir500i": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "italic",
          "fontWeight": 500,
          "src":
            "url(/fonts/avenir-500-roman-oblique.woff) format(woff)"
        }
      },
      "avenir600": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "normal",
          "fontWeight": 600,
          "src":
            "url(/fonts/avenir-600-medium-normal.woff) format(woff)"
        }
      },
      "avenir600i": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "italic",
          "fontWeight": 600,
          "src":
            "url(/fonts/avenir-600-medium-oblique.woff) format(woff)"
        }
      },
      "avenir700": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "normal",
          "fontWeight": 700,
          "src": "url(/fonts/avenir-700-heavy-normal.woff) format(woff)"
        }
      },
      "avenir700i": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "italic",
          "fontWeight": 700,
          "src":
            "url(/fonts/avenir-700-heavy-oblique.woff) format(woff)"
        }
      },
      "avenir800": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "normal",
          "fontWeight": 800,
          "src": "url(/fonts/avenir-800-black-normal.woff) format(woff)"
        }
      },
      "avenir800i": {
        "fontFamily": {
          "fontFamily": "Avenir",
          "fontStyle": "italic",
          "fontWeight": 800,
          "src":
            "url(/fonts/avenir-800-black-oblique.woff) format(woff)"
        }
      }
    }

    const actual1 = create(fonts)

    const expect1 = {
      "avenir300": "c8tut3",
      "avenir300i": "c8q4yg",
      "avenir400": "c8kiix",
      "avenir400i": "c8kll0",
      "avenir500": "c8dgvy",
      "avenir500i": "c8t8mk",
      "avenir600": "c85wvl",
      "avenir600i": "c87lgv",
      "avenir700": "c840de",
      "avenir700i": "c8463c",
      "avenir800": "c8re32",
      "avenir800i": "c8odhl"
    }

    const actual2 = css(fonts.avenir300)

    const expect2 = "c8tut3"

    t.deepEqual(actual1, expect1)
    t.deepEqual(actual2, expect2)
  }
)
