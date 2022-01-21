import ava from "ava"

import { defaultParams, parsePlaceholder } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parsePlaceholder()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given an object with valid placeholder (1)", (t) => {
  const actual = parsePlaceholder({
    "property": "%figure",
    "value": true
  })

  const expect = [
    {
      "identifier": "osgt00",
      "property": "%figure",
      "value": true
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object with valid placeholder (2)", (t) => {
  const actual = parsePlaceholder({
    "property": "%stuff",
    "value": true
  })

  const expect = [
    {
      "identifier": "os1x5c",
      "property": "%stuff",
      "value": true
    }
  ]

  t.deepEqual(actual, expect)
})

ava("given an object without a placeholder", (t) => {
  const actual = parsePlaceholder({
    "property": "%stuff",
    "value": {
      "backgroundColor": "#f00"
    }
  })

  const expect = [
    {
      "emit": true,
      "identifier": "os1x5c",
      "input": {
        "%stuff": true
      },
      "property": "%stuff",
      "value": true
    },
    {
      "emit": false,
      "identifier": "os1x5c",
      "input": {
        "backgroundColor": "#f00"
      },
      "property": "%stuff",
      "value": {
        "backgroundColor": "#f00"
      }
    }
  ]

  t.deepEqual(actual, expect)
})
