import ava from "ava"
import { parsePlaceholder } from "./parse-placeholder.js"
import { parseSelectors } from "./parse-selectors.js"

ava ("given undefined arguments", (t) => {
  const actual = parseSelectors ()

  const expect = {}

  t.deepEqual (actual, expect)
})

/* eslint-disable max-lines-per-function */
ava ("given an object with valid selectors", (t) => {
  const actual = parseSelectors ({
    "property": "#root %stuff",
    "value": {
      "#products::after,%figure > &,#body~&+stuff": {
        "background-color": "#f0f",
        "display": "grid"
      }
    }
  })

  const expect = [
    {
      "block": [
        {
          "background-color": "#f0f"
        }
      ],
      "emit": false,
      "identifier": "jsk31e",
      "input": {
        "background-color": "#f0f"
      },
      "media": "",
      "property": "backgroundColor",
      "selectors": [
        ["#root", " ", ".nbldkz", " ", "#products", "::after"],
        [".nbh3qz", ">", "#root", " ", ".nbldkz"],
        ["#body", "~", "#root", " ", ".nbldkz", "+", "stuff"]
      ],
      "value": "#f0f"
    },
    {
      "block": [
        {
          "display": "grid"
        }
      ],
      "emit": false,
      "identifier": "dqgkob",
      "input": {
        "display": "grid"
      },
      "media": "",
      "property": "display",
      "selectors": [
        ["#root", " ", ".nbldkz", " ", "#products", "::after"],
        [".nbh3qz", ">", "#root", " ", ".nbldkz"],
        ["#body", "~", "#root", " ", ".nbldkz", "+", "stuff"]
      ],
      "value": "grid"
    }
  ]

  t.deepEqual (actual, expect)
})
/* eslint-enable max-lines-per-function */

ava ("given an object with valid property and value", (t) => {
  const actual = parseSelectors ({
    "property": "@media (max-width: 767px)",
    "value": {
      "background-color": "#f0f"
    }
  })

  const expect = {
    "property": "@media (max-width: 767px)",
    "value": {
      "background-color": "#f0f"
    }
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid pseudo-class selector", (t) => {
  const actual = parseSelectors ({
    "property": ":hover",
    "value": {
      "font-family": "Helvetica"
    }
  })

  const expect = [
    {
      "block": [
        {
          "font-family": "Helvetica"
        }
      ],
      "emit": true,
      "identifier": "c4a3hh",
      "input": {
        "font-family": "Helvetica"
      },
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c4a3hh", ":hover"]],
      "value": "Helvetica"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid attribute selector", (t) => {
  const actual = parseSelectors ({
    "property": "[aria-expanded=true]",
    "value": {
      "backgroundColor": "#f00"
    }
  })

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "emit": false,
      "identifier": "jsjrn7",
      "input": { "backgroundColor": "#f00" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [["[aria-expanded=true]"]],
      "value": "#f00"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid placeholder selector", (t) => {
  const actual = parsePlaceholder ({
    "property": "%fieldset",
    "value": true
  })

  const expect = {
    "identifier": "nbrvip",
    "property": "%fieldset",
    "value": true
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid placeholder selector (2)", (t) => {
  const actual = parseSelectors ({
    "property": "%fieldset",
    "value": {
      "&[aria-expanded=true]": {
        "backgroundColor": "#f00"
      }
    }
  })

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "emit": false,
      "identifier": "jsinxq",
      "input": { "backgroundColor": "#f00" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".nbrvip", "[aria-expanded=true]"]],
      "value": "#f00"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid placeholder with attribute selector", (t) => {
  const actual = parseSelectors ({
    "property": "%fieldset[aria-expanded=true]",
    "value": {
      "backgroundColor": "#f00"
    }
  })

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "emit": false,
      "identifier": "jsinxq",
      "input": { "backgroundColor": "#f00" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".nbrvip", "[aria-expanded=true]"]],
      "value": "#f00"
    }
  ]

  t.deepEqual (actual, expect)
})
