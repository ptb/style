import ava from "ava"

import { isTypeSelector } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isTypeSelector()

  const expect = false

  t.is(actual, expect)
})

ava("given type selector string as argument", (t) => {
  const actual = isTypeSelector("body")

  const expect = true

  t.is(actual, expect)
})

ava("given string in variable format as argument", (t) => {
  const actual = isTypeSelector("$myThing")

  const expect = false

  t.is(actual, expect)
})

ava(
  "given type selector string with extra chars as argument",
  (t) => {
    const actual = isTypeSelector("body-stuff")

    const expect = false

    t.is(actual, expect)
  }
)

ava("given selector string as argument", (t) => {
  const actual = isTypeSelector(":hover")

  const expect = false

  t.is(actual, expect)
})
