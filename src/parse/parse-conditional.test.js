/*
  eslint-disable
    max-lines-per-function
 */

import ava from "ava"

import {
  defaultParams,
  parse,
  parseConditional,
  setVariable
} from "../index.js"

ava.serial("given undefined arguments", (t) => {
  const actual = parseConditional()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava.serial("given an object with valid media declaration", (t) => {
  const actual = parseConditional({
    "conditional": { "supports": ["(display:grid)"] },
    "property": "@media (min-width: 768px)",
    "value": { "bg": "#000" }
  })

  const expect = [
    {
      "conditional": {
        "media": ["(minWidth:768px)"],
        "supports": ["(display:grid)"]
      },
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#000"
    }
  ]

  t.deepEqual(actual, expect)
})

ava.serial(
  "given an object with complex valid media declaration",
  (t) => {
    const actual = parse({
      "input": {
        "@media (min-width: 768px)": {
          "@media (-webkit-min-device-pixel-ratio: 2)": {
            "background-color": "#000"
          }
        }
      }
    })

    const expect = [
      {
        "conditional": {
          "media": ["(WebkitMinDevicePixelRatio:2)", "(minWidth:768px)"]
        },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given object with 'margin' property and object value",
  (t) => {
    setVariable({
      "property": "$media",
      "value": { "lg": "(minWidth:1024px)", "xs": "(maxWidth:639.98px)" }
    })

    const actual = parseConditional({
      "value": { "_": { "margin": 20 }, "xs": { "margin": 10 } }
    })

    const expect = [
      {
        "conditional": { "media": [] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": { "media": ["(maxWidth:639.98px)"] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'margin' property and compound object value",
  (t) => {
    const actual = parseConditional({
      "value": { "_": { "margin": 20 }, "xs": { "R": { "margin": 10 } } }
    })

    const expect = [
      {
        "conditional": { "media": [] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": {
          "media": [
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)",
            "(maxWidth:639.98px)"
          ]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'margin' property and extra compound object value",
  (t) => {
    const actual = parseConditional({
      "value": {
        "_": { "P": { "margin": 20 } },
        "xs": { "R": { "L": { "margin": 10 } } }
      }
    })

    const expect = [
      {
        "conditional": { "media": ["(orientation:portrait)"] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": {
          "media": [
            "(orientation:landscape)",
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)",
            "(maxWidth:639.98px)"
          ]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'margin' property and media keys object",
  (t) => {
    const actual = parse({
      "input": {
        "@media (max-width: 1536px)": {
          "margin": { "lg": 20, "xs": { "R": 10 } }
        },
        "@media (min-width: 640px)": {
          "Pr": {
            "@media (prefers-color-scheme: dark)": {
              "margin": { "L": 5 }
            }
          }
        },
        "Lt": {
          "bg": {
            "@media (minWidth: 576px)": "hsla(200,80%,80%,.99)",
            "_": "#f00"
          }
        },
        "R": { "bg": "hsla(300,100%,50%,.8)" }
      }
    })

    const expect = [
      {
        "conditional": {
          "media": ["(minWidth:1024px)", "(maxWidth:1536px)"]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": {
          "media": [
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)",
            "(maxWidth:639.98px)",
            "(maxWidth:1536px)"
          ]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      },
      {
        "conditional": {
          "media": [
            "(orientation:landscape)",
            "(prefersColorScheme:dark)",
            "print",
            "(minWidth:640px)"
          ]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "5px"
      },
      {
        "conditional": {
          "media": ["(minWidth:576px)", "(prefersColorScheme:light)"]
        },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "hsla(200,80%,80%,.99)"
      },
      {
        "conditional": { "media": ["(prefersColorScheme:light)"] },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#f00"
      },
      {
        "conditional": {
          "media": [
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)"
          ]
        },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "hsla(300,100%,50%,.8)"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'bg' and 'color' property and media keys object",
  (t) => {
    const actual = parse({
      "input": {
        "Dk": {
          "bg": { "@media (minWidth: 768px)": "#333" },
          "color": "#eee"
        },
        "Lt": { "bg": "#eee", "color": "#333" }
      }
    })

    const expect = [
      {
        "conditional": {
          "media": ["(minWidth:768px)", "(prefersColorScheme:dark)"]
        },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#333"
      },
      {
        "conditional": { "media": ["(prefersColorScheme:dark)"] },
        "emit": true,
        "property": "color",
        "selectors": undefined,
        "value": "#eee"
      },
      {
        "conditional": { "media": ["(prefersColorScheme:light)"] },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#eee"
      },
      {
        "conditional": { "media": ["(prefersColorScheme:light)"] },
        "emit": true,
        "property": "color",
        "selectors": undefined,
        "value": "#333"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'bg' and media query object",
  (t) => {
    const actual = parseConditional({
      "conditional": { "media": [] },
      "property": "@media (min-width: 768px)",
      "value": { "bg": "#0f0" }
    })

    const expect = [
      {
        "conditional": { "media": ["(minWidth:768px)"] },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#0f0"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with mixed media query and properties",
  (t) => {
    const actual = parse({
      "input": {
        "Lt": { "m": { "@media (min-width: 768px)": 10 } },
        "m": { "Dk": 20 }
      }
    })

    const expect = [
      {
        "conditional": {
          "media": ["(minWidth:768px)", "(prefersColorScheme:light)"]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      },
      {
        "conditional": { "media": ["(prefersColorScheme:dark)"] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial("given an object with valid feature query 1", (t) => {
  const actual = parseConditional(
    {
      "conditional": { "supports": [] },
      "property": "@supports (display: inline-block)",
      "value": { "display": "inline-block" }
    },
    "supports"
  )

  const expect = [
    {
      "conditional": { "supports": ["(display:inlineBlock)"] },
      "emit": true,
      "property": "display",
      "selectors": undefined,
      "value": "inline-block"
    }
  ]

  t.deepEqual(actual, expect)
})

ava.serial("given an object with valid feature query", (t) => {
  const actual = parseConditional(
    {
      "property": "@supports (display: inline-block)",
      "value": { "bg": { "@supports (display:flex)": "#000" } }
    },
    "supports"
  )

  const expect = [
    {
      "conditional": {
        "supports": ["(display:flex)", "(display:inlineBlock)"]
      },
      "emit": true,
      "property": "backgroundColor",
      "selectors": undefined,
      "value": "#000"
    }
  ]

  t.deepEqual(actual, expect)
})

ava.serial(
  "given an object with complex valid feature query",
  (t) => {
    const actual = parse({
      "input": {
        "@supports (display: inline-block)": {
          "@media (-webkit-min-device-pixel-ratio: 2)": {
            "background-color": "#000"
          }
        }
      }
    })

    const expect = [
      {
        "conditional": {
          "media": ["(WebkitMinDevicePixelRatio:2)"],
          "supports": ["(display:inlineBlock)"]
        },
        "emit": true,
        "property": "backgroundColor",
        "selectors": undefined,
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given object with 'margin' property and object value for $supports",
  (t) => {
    setVariable({
      "property": "$supports",
      "value": { "hasFlex": "(display:flex)", "hasGrid": "(display:grid)" }
    })

    const actual = parseConditional(
      { "value": { "hasFlex": { "margin": 20 }, "hasGrid": { "margin": 10 } } },
      "supports"
    )

    const expect = [
      {
        "conditional": { "supports": ["(display:flex)"] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": { "supports": ["(display:grid)"] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'margin' property and compound object value for $supports",
  (t) => {
    const actual = parseConditional(
      {
        "value": {
          "hasFlex": { "margin": 20 },
          "R": { "hasGrid": { "margin": 10 } }
        }
      },
      "supports"
    )

    const expect = [
      {
        "conditional": { "supports": ["(display:flex)"] },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": {
          "media": [
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)"
          ],
          "supports": ["(display:grid)"]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'margin' property and extra compound object value for $supports",
  (t) => {
    const actual = parse({
      "conditional": { "supports": ["(color:hsla(0,0%,0%,1)"] },
      "input": {
        "hasFlex": { "P": { "margin": 20 } },
        "R": { "L": { "margin": { "hasGrid": 10 } } }
      }
    })

    const expect = [
      {
        "conditional": {
          "media": ["(orientation:portrait)"],
          "supports": ["(display:flex)", "(color:hsla(0,0%,0%,1)"]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": {
          "media": [
            "(orientation:landscape)",
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)"
          ],
          "supports": ["(display:grid)", "(color:hsla(0,0%,0%,1)"]
        },
        "emit": true,
        "property": "margin",
        "selectors": undefined,
        "value": "10px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with 'margin' property and media keys object for $supports",
  (t) => {
    const actual = parse({
      "input": {
        "@media (max-width: 1536px)": {
          "my": {
            "@supports (display:flex)": 20,
            "R": { "@supports (display:grid)": 10 }
          }
        },
        "@media (min-width: 640px)": {
          "Pr": {
            "@media (prefers-color-scheme: dark)": {
              "size": { "hasGrid": 5 }
            }
          }
        }
      }
    })

    const expect = [
      {
        "conditional": {
          "media": ["(maxWidth:1536px)"],
          "supports": ["(display:flex)"]
        },
        "emit": true,
        "property": "marginBottom",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": {
          "media": [
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)",
            "(maxWidth:1536px)"
          ],
          "supports": ["(display:grid)"]
        },
        "emit": true,
        "property": "marginBottom",
        "selectors": undefined,
        "value": "10px"
      },
      {
        "conditional": {
          "media": ["(maxWidth:1536px)"],
          "supports": ["(display:flex)"]
        },
        "emit": true,
        "property": "marginTop",
        "selectors": undefined,
        "value": "20px"
      },
      {
        "conditional": {
          "media": [
            "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)",
            "(maxWidth:1536px)"
          ],
          "supports": ["(display:grid)"]
        },
        "emit": true,
        "property": "marginTop",
        "selectors": undefined,
        "value": "10px"
      },
      {
        "conditional": {
          "media": [
            "(prefersColorScheme:dark)",
            "print",
            "(minWidth:640px)"
          ],
          "supports": ["(display:grid)"]
        },
        "emit": true,
        "property": "height",
        "selectors": undefined,
        "value": "5px"
      },
      {
        "conditional": {
          "media": [
            "(prefersColorScheme:dark)",
            "print",
            "(minWidth:640px)"
          ],
          "supports": ["(display:grid)"]
        },
        "emit": true,
        "property": "width",
        "selectors": undefined,
        "value": "5px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava.serial("given an object with @supports and property", (t) => {
  const actual = parse({
    "input": {
      "@supports (WebkitOverflowScrolling:touch)": {
        ":where(input)": {
          "fontSize": "1.6rem"
        }
      }
    }
  })

  const expect = [
    {
      "conditional": {
        "supports": ["(WebkitOverflowScrolling:touch)"]
      },
      "emit": false,
      "property": "fontSize",
      "selectors": undefined,
      "value": "1.6rem"
    },
    {
      "conditional": {
        "supports": ["(WebkitOverflowScrolling:touch)"]
      },
      "emit": true,
      "property": "fontSize",
      "selectors": [[":where(input)"]],
      "value": "1.6rem"
    }
  ]

  t.deepEqual(actual, expect)
})
