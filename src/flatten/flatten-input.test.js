import ava from "ava"

import { flattenInput, store } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = flattenInput()

  const expect = {}

  t.deepEqual(actual, expect)
})

ava("given an object", (t) => {
  const actual = flattenInput({
    "input": {
      "a": "b",
      "c": "d"
    }
  })

  const expect = {
    "a": "b",
    "c": "d"
  }

  t.deepEqual(actual, expect)
})

ava("given an array of objects", (t) => {
  const actual = flattenInput({
    "input": [
      {
        "e": "f"
      },
      {
        "g": "h"
      }
    ]
  })

  const expect = {
    "e": "f",
    "g": "h"
  }

  t.deepEqual(actual, expect)
})

ava("given an object with kebab-case keys", (t) => {
  const actual = flattenInput({
    "input": [
      {
        "i-j-k": "l"
      },
      {
        "i-j-k": "p",
        "m-n": "o"
      }
    ]
  })

  const expect = {
    "i-j-k": "p",
    "m-n": "o"
  }

  t.deepEqual(actual, expect)
})

ava("given an object with array value", (t) => {
  const actual = flattenInput({
    "input": {
      "backgroundColor": "#f00",
      "display": ["block", "flex", "grid"]
    }
  })

  const expect = {
    "backgroundColor": "#f00",
    "display": ["block", "flex", "grid"]
  }

  t.deepEqual(actual, expect)
})

ava("given array of style objects", (t) => {
  flattenInput({
    "input": {
      "$defaultFont": "Helvetica,Arial,sans-serif"
    }
  })

  const actual = store.get("").get("$defaultFont")

  const expect = {
    "conditional": { "media": undefined },
    "property": "$defaultFont",
    "value": "Helvetica,Arial,sans-serif"
  }

  t.deepEqual(actual, expect)
})
