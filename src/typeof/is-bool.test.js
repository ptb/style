import ava from "ava"

import { isBool } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isBool(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given true", (t) => {
  const actual = isBool(true)

  const expect = true

  t.is(actual, expect)
})

ava("given false", (t) => {
  const actual = isBool(false)

  const expect = true

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = isBool("")

  const expect = false

  t.is(actual, expect)
})
