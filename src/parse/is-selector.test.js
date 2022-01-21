import ava from "ava"

import { isSelector } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isSelector()

  const expect = false

  t.is(actual, expect)
})

ava("given selector as argument", (t) => {
  const actual = isSelector(":hover")

  const expect = true

  t.is(actual, expect)
})

ava("given CSS property as argument", (t) => {
  const actual = isSelector("display")

  const expect = false

  t.is(actual, expect)
})
