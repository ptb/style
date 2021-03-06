import ava from "ava"
import { create } from "./create.js"
import { css } from "./css.js"

ava ("given undefined arguments", (t) => {
  const actual = create ()
  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with simple declarations", (t) => {
  const actual = create ({
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
    "banner": "dqztx9 dsfndl",
    "product": "dq54gk jjx2a9"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with simple declarations and function", (t) => {
  const actual = create ({
    "banner": {
      "display": "block",
      "width": "80%"
    },
    "item": (size) => ({
      "fontSize": size
    }),
    "product": {
      "color": "#f00",
      "display": ["block", "flex", "grid"]
    }
  })

  const expect = {
    "banner": "dqztx9 dsfndl",
    "item": function item () {},
    "product": "dq54gk jjx2a9"
  }

  t.deepEqual (actual, expect)
})

/* eslint-disable max-lines-per-function */
ava ("given an object with multiple 'fontFamily' declarations", (t) => {
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
        "src": "url(/fonts/avenir-300-light-oblique.woff) format(woff)"
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
        "src": "url(/fonts/avenir-500-roman-oblique.woff) format(woff)"
      }
    },
    "avenir600": {
      "fontFamily": {
        "fontFamily": "Avenir",
        "fontStyle": "normal",
        "fontWeight": 600,
        "src": "url(/fonts/avenir-600-medium-normal.woff) format(woff)"
      }
    },
    "avenir600i": {
      "fontFamily": {
        "fontFamily": "Avenir",
        "fontStyle": "italic",
        "fontWeight": 600,
        "src": "url(/fonts/avenir-600-medium-oblique.woff) format(woff)"
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
        "src": "url(/fonts/avenir-700-heavy-oblique.woff) format(woff)"
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
        "src": "url(/fonts/avenir-800-black-oblique.woff) format(woff)"
      }
    }
  }

  const actual1 = create (fonts)

  const expect1 = {
    "avenir300": "c41w4b",
    "avenir300i": "c4e9u0",
    "avenir400": "c4rkrw",
    "avenir400i": "c4dc5b",
    "avenir500": "c49ji2",
    "avenir500i": "c4wqt3",
    "avenir600": "c4kync",
    "avenir600i": "c4hvw5",
    "avenir700": "c4zj0a",
    "avenir700i": "c44xmd",
    "avenir800": "c43h5q",
    "avenir800i": "c4psr5"
  }

  const actual2 = css (fonts.avenir300)

  const expect2 = "c41w4b"

  t.deepEqual (actual1, expect1)
  t.deepEqual (actual2, expect2)
})
/* eslint-enable max-lines-per-function */
