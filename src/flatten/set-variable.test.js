import ava from "ava"

import { setVariable, store } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = setVariable()

  const expect = {}

  t.deepEqual(actual, expect)
})

ava("given a variable property with object value", (t) => {
  setVariable({
    "property": "$unCite",
    "value": {
      "fontStyle": "inherit"
    }
  })

  const actual = store.get("").get("$unCite").value

  const expect = {
    "fontStyle": "inherit"
  }

  t.deepEqual(actual, expect)
})

ava("given a variable property with array value", (t) => {
  setVariable({
    "property": "$display",
    "value": ["inline-block", "inline-flex", "inline-grid"]
  })

  const actual = store.get("").get("$display")

  const expect = {
    "property": "$display",
    "value": ["inline-block", "inline-flex", "inline-grid"]
  }

  t.deepEqual(actual, expect)
})

ava("given an existing variable key", (t) => {
  setVariable({
    "property": "$theme",
    "value": {
      "primaryBlue": "#00f"
    }
  })

  const actual1 = store.get("").get("$theme")

  setVariable({
    "property": "$theme",
    "value": {
      "primaryGreen": "#0f0"
    }
  })

  const actual2 = store.get("").get("$theme")

  const expect1 = {
    "property": "$theme",
    "value": {
      "primaryBlue": "#00f"
    }
  }

  const expect2 = {
    "property": "$theme",
    "value": {
      "primaryBlue": "#00f",
      "primaryGreen": "#0f0"
    }
  }

  t.deepEqual(actual1, expect1)
  t.deepEqual(actual2, expect2)
})

ava("given an existing variable key with array value", (t) => {
  setVariable({
    "property": "$fonts",
    "value": [
      "Consolas",
      "Monaco",
      "Andale Mono",
      "Ubuntu Mono",
      "monospace"
    ]
  })

  const actual1 = store.get("").get("$fonts")

  setVariable({
    "property": "$fonts",
    "value": [
      "Arial",
      "Helvetica",
      "Gill Sans",
      "Lucida",
      "Helvetica Narrow",
      "sans-serif"
    ]
  })

  const actual2 = store.get("").get("$fonts")

  const expect1 = {
    "property": "$fonts",
    "value": [
      "Consolas",
      "Monaco",
      "Andale Mono",
      "Ubuntu Mono",
      "monospace"
    ]
  }

  const expect2 = {
    "property": "$fonts",
    "value": [
      "Arial",
      "Helvetica",
      "Gill Sans",
      "Lucida",
      "Helvetica Narrow",
      "sans-serif"
    ]
  }

  t.deepEqual(actual1, expect1)
  t.deepEqual(actual2, expect2)
})
