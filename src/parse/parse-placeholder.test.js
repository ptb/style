import ava from "ava"
import { parsePlaceholder } from "./parse-placeholder.js"

ava ("given undefined arguments", (t) => {
  const actual = parsePlaceholder ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with valid placeholder (1)", (t) => {
  const actual = parsePlaceholder ({
    "property": "%figure",
    "value": true
  })

  const expect = {
    "identifier": "afh3qz",
    "property": "%figure",
    "value": true
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid placeholder (2)", (t) => {
  const actual = parsePlaceholder ({
    "property": "%stuff",
    "value": true
  })

  const expect = {
    "identifier": "afldkz",
    "property": "%stuff",
    "value": true
  }

  t.deepEqual (actual, expect)
})

ava ("given an object without a placeholder", (t) => {
  const actual = parsePlaceholder ({
    "property": "%stuff",
    "value": {
      "backgroundColor": "#f00"
    }
  })

  const expect = {
    "property": "%stuff",
    "value": {
      "backgroundColor": "#f00"
    }
  }

  t.deepEqual (actual, expect)
})
