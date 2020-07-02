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
      "identifier": "jt4tmq",
      "input": {
        "background-color": "#f0f"
      },
      "media": "",
      "property": "backgroundColor",
      "selectors": [
        ["#root", " ", ".afldkz", " ", "#products", "::after"],
        [".afh3qz", ">", "#root", " ", ".afldkz"],
        ["#body", "~", "#root", " ", ".afldkz", "+", "stuff"]
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
      "identifier": "dr0gcr",
      "input": {
        "display": "grid"
      },
      "media": "",
      "property": "display",
      "selectors": [
        ["#root", " ", ".afldkz", " ", "#products", "::after"],
        [".afh3qz", ">", "#root", " ", ".afldkz"],
        ["#body", "~", "#root", " ", ".afldkz", "+", "stuff"]
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
      "identifier": "c5a3hh",
      "input": {
        "font-family": "Helvetica"
      },
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c5a3hh", ":hover"]],
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
      "identifier": "jtjrn7",
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
    "identifier": "afrvip",
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
      "identifier": "jtor09",
      "input": { "backgroundColor": "#f00" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".afrvip", "[aria-expanded=true]"]],
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
      "identifier": "jtor09",
      "input": { "backgroundColor": "#f00" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".afrvip", "[aria-expanded=true]"]],
      "value": "#f00"
    }
  ]

  t.deepEqual (actual, expect)
})
