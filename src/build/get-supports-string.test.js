import ava from "ava"

import { getSupportsString } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getSupportsString()

  const expect = ""

  t.is(actual, expect)
})

ava("given empty array", (t) => {
  const actual = getSupportsString([])

  const expect = ""

  t.is(actual, expect)
})

ava("given array containing an invalid feature query", (t) => {
  const actual = getSupportsString([1])

  const expect = ""

  t.is(actual, expect)
})

ava("given array containing one feature query", (t) => {
  const actual = getSupportsString(["(display: inlineBlock)"])

  const expect = "(display:inline-block)"

  t.is(actual, expect)
})

ava("given array containing two feature queries", (t) => {
  const actual = getSupportsString([
    "(display: flex)",
    "(display: grid)"
  ])

  const expect = "((display:flex) and (display:grid))"

  t.is(actual, expect)
})
