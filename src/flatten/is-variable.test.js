import ava from "ava"

import { isVariable } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isVariable()

  const expect = false

  t.is(actual, expect)
})

ava("given string in variable format as argument (1)", (t) => {
  const actual = isVariable("$myThing")

  const expect = true

  t.is(actual, expect)
})

ava("given string in variable format as argument (2)", (t) => {
  const actual = isVariable("$myThing", false)

  const expect = true

  t.is(actual, expect)
})

ava(
  "given string in variable format with extra chars as argument (1)",
  (t) => {
    const actual = isVariable("$myThing-stuff")

    const expect = false

    t.is(actual, expect)
  }
)

ava(
  "given string in variable format with extra chars as argument (2)",
  (t) => {
    const actual = isVariable("$myThing-stuff", false)

    const expect = true

    t.is(actual, expect)
  }
)

ava("given string in non-variable format as argument", (t) => {
  const actual = isVariable("myThing")

  const expect = false

  t.is(actual, expect)
})
