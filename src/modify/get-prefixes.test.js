import ava from "ava"

import { getPrefixes, setVariable } from "../index.js"

ava.serial("given default prefixes", (t) => {
  const actual = getPrefixes()

  const expect = {
    "appearance": ["Webkit-", "Moz-"],
    "hyphens": ["Webkit-", "Ms-"],
    "tabSize": ["Moz-", "O-"],
    "userSelect": ["Webkit-", "Moz-", "Ms-"]
  }

  t.deepEqual(actual, expect)
})

ava.serial("given extended prefixes", (t) => {
  setVariable({
    "property": "$prefixes",
    "value": {
      "scrollbarColor": ["Webkit-"]
    }
  })

  const actual = getPrefixes()

  const expect = {
    "appearance": ["Webkit-", "Moz-"],
    "hyphens": ["Webkit-", "Ms-"],
    "scrollbarColor": ["Webkit-"],
    "tabSize": ["Moz-", "O-"],
    "userSelect": ["Webkit-", "Moz-", "Ms-"]
  }

  t.deepEqual(actual, expect)
})
