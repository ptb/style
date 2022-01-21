import ava from "ava"

import { isProperty } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isProperty()

  const expect = false

  t.is(actual, expect)
})

ava("given kebab-case CSS property", (t) => {
  const actual = isProperty("background-color")

  const expect = true

  t.is(actual, expect)
})

ava("given camel-case CSS property (1)", (t) => {
  const actual = isProperty("--primary-color")

  const expect = true

  t.is(actual, expect)
})

ava("given camel-case CSS property (2)", (t) => {
  const actual = isProperty("voiceDuration")

  const expect = true

  t.is(actual, expect)
})

ava("given an invalid CSS property", (t) => {
  const actual = isProperty("inlineBlock")

  const expect = false

  t.is(actual, expect)
})
