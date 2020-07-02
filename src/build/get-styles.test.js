import ava from "ava"
import { css } from "../api/css.js"
import { cache } from "../store/cache.js"
import { getStyles } from "./get-styles.js"

ava.serial ("given undefined arguments", (t) => {
  const actual = getStyles ()
  const expect = ""

  t.is (actual, expect)
})

ava.serial ("given an object with placeholder property", (t) => {
  cache ({
    "block": [{ "%figure": true }],
    "emit": true,
    "identifier": "af3qz",
    "input": { "%figure": true },
    "media": "",
    "property": "%figure",
    "selectors": [],
    "value": true
  })

  const actual = getStyles ()

  const expect = ""

  t.is (actual, expect)
})

ava.serial ("given an object with simple property and value", (t) => {
  cache ({
    "block": [
      {
        "background-color": "#f00"
      }
    ],
    "identifier": "jtx2a9",
    "property": "backgroundColor",
    "selectors": [[".jtx2a9"]],
    "value": "#f00"
  })

  const actual = getStyles ()

  const expect = ".jtx2a9{background-color:#f00}"

  t.is (actual, expect)
})

/* eslint-disable sort-keys */
ava.serial ("given a sample declaration", (t) => {
  css ({
    "backgroundColor": "#0f0",
    "@media (min-width: 768px)": {
      "backgroundColor": "#f00"
    }
  })

  const actual = getStyles ()

  const expect =
    ".jtx2a9{background-color:#f00}.jtxz4h{background-color:#0f0}@media (min-width: 768px){.jttdpi{background-color:#f00}}"

  t.is (actual, expect)
})
/* eslint-enable sort-keys */

ava.serial ("given an object with simple property and value (2)", (t) => {
  cache ({
    "block": [
      {
        "background-color": "#f00"
      }
    ],
    "emit": true,
    "identifier": "jtdzh",
    "input": {
      "background-color": "#f00"
    },
    "media": "",
    "property": "backgroundColor",
    "selectors": [[".jtdzh", ":hover"]],
    "value": "#f00"
  })

  const actual = getStyles ()

  const expect =
    ".jtx2a9,.jtdzh:hover{background-color:#f00}.jtxz4h{background-color:#0f0}@media (min-width: 768px){.jttdpi{background-color:#f00}}"

  t.is (actual, expect)
})
