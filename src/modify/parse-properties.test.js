/*
  eslint-disable
    max-lines-per-function
 */

import ava from "ava"

import { defaultParams, parse, parseProperties } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseProperties()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given non-property", (t) => {
  const actual = parseProperties(
    { "property": "backgroundShape", "value": "3d-square" },
    "abcdefg",
    true
  )

  const expect = [
    {
      "block": [
        {
          "background-shape": "3d-square"
        }
      ],
      "emit": undefined,
      "identifier": "aemb59",
      "property": "backgroundShape",
      "selectors": [[".aemb59"]],
      "value": "3d-square"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with undefined identifier (1)", (t) => {
  const actual = parseProperties(
    { "property": "backgroundColor", "value": "#f00" },
    "",
    true
  )

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "emit": undefined,
      "identifier": "kclzxd",
      "property": "backgroundColor",
      "selectors": [[".kclzxd"]],
      "value": "#f00"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with undefined identifier (2)", (t) => {
  const actual = parseProperties(
    { "property": "backgroundColor", "value": "#0f0" },
    "",
    true
  )

  const expect = [
    {
      "block": [{ "background-color": "#0f0" }],
      "emit": undefined,
      "identifier": "kcbfig",
      "property": "backgroundColor",
      "selectors": [[".kcbfig"]],
      "value": "#0f0"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with undefined identifier (3)", (t) => {
  const actual = parseProperties(
    { "property": "color", "value": "#0f0" },
    "",
    true
  )

  const expect = [
    {
      "block": [{ "color": "#0f0" }],
      "emit": undefined,
      "identifier": "k0bfig",
      "property": "color",
      "selectors": [[".k0bfig"]],
      "value": "#0f0"
    }
  ]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with undefined identifier and media (1)",
  (t) => {
    const actual = parseProperties(
      {
        "conditional": { "media": ["(max-width: 767px)"] },
        "property": "color",
        "value": "#0f0"
      },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "color": "#0f0" }],
        "conditional": { "media": ["(max-width: 767px)"] },
        "emit": undefined,
        "identifier": "k0nuyt",
        "property": "color",
        "selectors": [[".k0nuyt"]],
        "value": "#0f0"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier and media (2)",
  (t) => {
    const actual = parseProperties(
      {
        "conditional": { "media": ["(min-width: 768px)"] },
        "property": "color",
        "value": "#0f0"
      },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "color": "#0f0" }],
        "conditional": { "media": ["(min-width: 768px)"] },
        "emit": undefined,
        "identifier": "k0gvt2",
        "property": "color",
        "selectors": [[".k0gvt2"]],
        "value": "#0f0"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier and selectors (1)",
  (t) => {
    const actual = parseProperties(
      { "property": "color", "selectors": [[":active"]], "value": "#0f0" },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "color": "#0f0" }],
        "emit": undefined,
        "identifier": "k0ucb4",
        "property": "color",
        "selectors": [[".k0ucb4", ":active"]],
        "value": "#0f0"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier and selectors (2)",
  (t) => {
    const actual = parseProperties(
      { "property": "color", "selectors": [[":hover"]], "value": "#0f0" },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "color": "#0f0" }],
        "emit": undefined,
        "identifier": "k0tq81",
        "property": "color",
        "selectors": [[".k0tq81", ":hover"]],
        "value": "#0f0"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier, media, and selectors",
  (t) => {
    const actual = parseProperties(
      {
        "conditional": { "media": ["(min-width: 768px)"] },
        "property": "color",
        "selectors": [[":hover"]],
        "value": "#0f0"
      },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "color": "#0f0" }],
        "conditional": { "media": ["(min-width: 768px)"] },
        "emit": undefined,
        "identifier": "k0lki8",
        "property": "color",
        "selectors": [[".k0lki8", ":hover"]],
        "value": "#0f0"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier with selectors",
  (t) => {
    const actual = parseProperties(
      {
        "property": "background-color",
        "selectors": [[".abcde"]],
        "value": "#f00"
      },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "background-color": "#f00" }],
        "emit": undefined,
        "identifier": "kcrytl",
        "property": "background-color",
        "selectors": [[".abcde"]],
        "value": "#f00"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava("given an object with defined identifier", (t) => {
  const actual = parseProperties(
    {
      "identifier": "abcde",
      "property": "background-color",
      "value": "#f00"
    },
    "",
    true
  )

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "emit": undefined,
      "identifier": "abcde",
      "property": "background-color",
      "selectors": [[".abcde"]],
      "value": "#f00"
    }
  ]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with valid camel-case property and value",
  (t) => {
    const actual = parseProperties(
      { "property": "backgroundColor", "value": "#000" },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "background-color": "#000" }],
        "emit": undefined,
        "identifier": "kc26hh",
        "property": "backgroundColor",
        "selectors": [[".kc26hh"]],
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid kebab-case property and value",
  (t) => {
    const actual = parseProperties(
      { "property": "background-color", "value": "#000" },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "background-color": "#000" }],
        "emit": undefined,
        "identifier": "kc26hh",
        "property": "background-color",
        "selectors": [[".kc26hh"]],
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid property, value, and selectors",
  (t) => {
    const actual = parseProperties(
      {
        "property": "background-color",
        "selectors": [[":hover"]],
        "value": "#000"
      },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "background-color": "#000" }],
        "emit": undefined,
        "identifier": "kco8yv",
        "property": "background-color",
        "selectors": [[".kco8yv", ":hover"]],
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava("given an object with valid property, value, and media", (t) => {
  const actual = parseProperties(
    {
      "conditional": { "media": ["(min-width: 768px)"] },
      "property": "background-color",
      "value": "#000"
    },
    "ghijkl",
    true
  )

  const expect = [
    {
      "block": [{ "background-color": "#000" }],
      "conditional": { "media": ["(min-width: 768px)"] },
      "emit": undefined,
      "identifier": "kcgvt2",
      "property": "background-color",
      "selectors": [[".kcgvt2"]],
      "value": "#000"
    }
  ]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with valid property, value, media, and selectors",
  (t) => {
    const actual = parseProperties(
      {
        "conditional": { "media": ["(min-width: 768px)"] },
        "property": "background-color",
        "selectors": [[":hover"]],
        "value": "#000"
      },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "background-color": "#000" }],
        "conditional": {
          "media": ["(min-width: 768px)"]
        },
        "emit": undefined,
        "identifier": "kco031",
        "property": "background-color",
        "selectors": [[".kco031", ":hover"]],
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid property, value, media, and `:root` selector",
  (t) => {
    const actual = parseProperties(
      {
        "conditional": { "media": ["(min-width: 768px)"] },
        "property": "background-color",
        "selectors": [[":root"]],
        "value": "#000"
      },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "background-color": "#000" }],
        "conditional": { "media": ["(min-width: 768px)"] },
        "emit": undefined,
        "identifier": "kcjt9k",
        "property": "background-color",
        "selectors": [[":root"]],
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid camel-case property, value, and selectors",
  (t) => {
    const actual = parseProperties(
      { "property": "backgroundColor", "selectors": [], "value": "#000" },
      "",
      true
    )

    const expect = [
      {
        "block": [{ "background-color": "#000" }],
        "emit": undefined,
        "identifier": "kc26hh",
        "property": "backgroundColor",
        "selectors": [[".kc26hh"]],
        "value": "#000"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava("given an object with a self-selector key", (t) => {
  const actual = parse(
    {
      "input": {
        "&": {
          "bg": ["inline-block", "inline-flex"],
          "fontSize": { "_": 14, "Sm": 10 },
          "my": 12
        }
      }
    },
    "ghijkl",
    true
  )

  const expect = [
    {
      "block": [
        { "background-color": "inline-block" },
        { "background-color": "inline-flex" }
      ],
      "conditional": { "media": undefined },
      "emit": false,
      "identifier": "kclasr",
      "property": "backgroundColor",
      "selectors": [[".kclasr"]],
      "value": ["inline-block", "inline-flex"]
    },
    {
      "block": [{ "font-size": "14px" }],
      "conditional": { "media": [] },
      "emit": false,
      "identifier": "c7xckm",
      "property": "fontSize",
      "selectors": [[".c7xckm"]],
      "value": "14px"
    },
    {
      "block": [{ "font-size": "10px" }],
      "conditional": { "media": ["(maxWidth:767.98px)"] },
      "emit": false,
      "identifier": "c77jfs",
      "property": "fontSize",
      "selectors": [[".c77jfs"]],
      "value": "10px"
    },
    {
      "block": [{ "margin-bottom": "12px" }],
      "conditional": { "media": undefined },
      "emit": false,
      "identifier": "eh481t",
      "property": "marginBottom",
      "selectors": [[".eh481t"]],
      "value": "12px"
    },
    {
      "block": [{ "margin-top": "12px" }],
      "conditional": { "media": undefined },
      "emit": false,
      "identifier": "ef481t",
      "property": "marginTop",
      "selectors": [[".ef481t"]],
      "value": "12px"
    },
    {
      "block": [
        { "background-color": "inline-block" },
        { "background-color": "inline-flex" }
      ],
      "conditional": { "media": undefined },
      "emit": true,
      "identifier": "orrrxi",
      "property": "backgroundColor",
      "selectors": [[".orrrxi"]],
      "value": ["inline-block", "inline-flex"]
    },
    {
      "block": [{ "font-size": "14px" }],
      "conditional": { "media": [] },
      "emit": true,
      "identifier": "orrrxi",
      "property": "fontSize",
      "selectors": [[".orrrxi"]],
      "value": "14px"
    },
    {
      "block": [{ "font-size": "10px" }],
      "conditional": { "media": ["(maxWidth:767.98px)"] },
      "emit": true,
      "identifier": "orwlbb",
      "property": "fontSize",
      "selectors": [[".orwlbb"]],
      "value": "10px"
    },
    {
      "block": [{ "margin-bottom": "12px" }],
      "conditional": { "media": undefined },
      "emit": true,
      "identifier": "orrrxi",
      "property": "marginBottom",
      "selectors": [[".orrrxi"]],
      "value": "12px"
    },
    {
      "block": [{ "margin-top": "12px" }],
      "conditional": { "media": undefined },
      "emit": true,
      "identifier": "orrrxi",
      "property": "marginTop",
      "selectors": [[".orrrxi"]],
      "value": "12px"
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with compound self selectors", (t) => {
  const actual = parse(
    {
      "input": {
        "& a:active,& a:focus,& a:hover": {
          "backgroundRepeat": "no-repeat"
        }
      }
    },
    "xyzooo",
    true
  )

  const expect = [
    {
      "block": [{ "background-repeat": "no-repeat" }],
      "conditional": { "media": undefined },
      "emit": false,
      "identifier": "kgh12s",
      "property": "backgroundRepeat",
      "selectors": [[".kgh12s"]],
      "value": "no-repeat"
    },
    {
      "block": [{ "background-repeat": "no-repeat" }],
      "conditional": { "media": undefined },
      "emit": true,
      "identifier": "or3y02 orm48n orbfh5",
      "property": "backgroundRepeat",
      "selectors": [
        [".or3y02", " ", "a", ":active"],
        [".orm48n", " ", "a", ":focus"],
        [".orbfh5", " ", "a", ":hover"]
      ],
      "value": "no-repeat"
    }
  ]

  t.deepEqual(actual, expect)
})
