import ava from "ava"

import { isFontFace } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isFontFace()

  const expect = false

  t.is(actual, expect)
})

ava("given a property with fontFamily key", (t) => {
  const actual = isFontFace("fontFamily")

  const expect = true

  t.is(actual, expect)
})

ava("given a property with fontFace key", (t) => {
  const actual = isFontFace("fontFace")

  const expect = false

  t.is(actual, expect)
})
