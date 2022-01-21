import ava from "ava"

import { flattenInput } from "../index.js"

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
