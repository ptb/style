import ava from "ava"

import { defaultParams, parseSelfSelector, store } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = parseSelfSelector()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava("given object without self-selector", (t) => {
  const input = {
    "property": "display",
    "selectors": [[".abcdef", ".ghijkl"]],
    "value": "flex"
  }

  const actual = parseSelfSelector(input, "abcdef", true)

  const expect = [input]

  t.deepEqual(actual, expect)
})

ava.serial("given object with self-selector (1)", (t) => {
  const input = {
    "property": "display",
    "selectors": [[".ghijkl", "&"]],
    "value": "flex"
  }

  parseSelfSelector(input, "abcdef", true)

  const actual = store
    .get("")
    .get("abcdef")
    .get(".ghijkl&")[498]

  const expect = '"flex"'

  t.is(store.get("").has("abcdef"), true)
  t.deepEqual(actual, expect)
})

ava.serial("given object with self-selector (2)", (t) => {
  t.is(store.has(""), true)
  t.is(store.get("").has("abcdef"), true)

  const input = {
    "property": "textDecoration",
    "selectors": [[".ghijkl", "&"]],
    "value": "none"
  }

  parseSelfSelector(input, "abcdef", true)

  const actual = store
    .get("")
    .get("abcdef")
    .get(".ghijkl&")

  const expect = '"none"'

  t.is(store.get("").has("abcdef"), true)
  t.deepEqual(actual[415], expect)
  t.deepEqual(actual.filter(Boolean), ['"none"', '"flex"'])
})

ava.serial("given an object with compound self-selector", (t) => {
  parseSelfSelector(
    {
      "property": "backgroundImage",
      "selectors": [
        ["&", " ", "a:active"],
        ["&", " ", "a:focus"],
        ["&", " ", "a:hover"]
      ],
      "value": "url('image.gif')"
    },
    "ghijkl",
    true
  )

  const actual1 = store
    .get("")
    .get("ghijkl")
    .get("& a:active")[733]

  const actual2 = store
    .get("")
    .get("ghijkl")
    .get("& a:focus")[733]

  const actual3 = store
    .get("")
    .get("ghijkl")
    .get("& a:hover")[733]

  const expect = "\"url('image.gif')\""

  t.is(actual1, expect)
  t.is(actual2, expect)
  t.is(actual3, expect)
})
