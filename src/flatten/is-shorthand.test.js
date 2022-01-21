import ava from "ava"

import { isShorthand } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isShorthand()

  const expect = false

  t.is(actual, expect)
})

ava("given string with shorthand as argument", (t) => {
  const actual = isShorthand("m")

  const expect = true

  t.is(actual, expect)
})

ava(
  "given string with regex tested shorthand as argument (1)",
  (t) => {
    const actual = isShorthand("marginHorizontal")

    const expect = true

    t.is(actual, expect)
  }
)

ava(
  "given string with regex tested shorthand as argument (2)",
  (t) => {
    const actual = isShorthand("paddingX")

    const expect = true

    t.is(actual, expect)
  }
)

ava("given a string with a non-shorthand as argument (1)", (t) => {
  const actual = isShorthand("ma")

  const expect = false

  t.is(actual, expect)
})

ava("given a string with a non-shorthand as argument (2)", (t) => {
  const actual = isShorthand("padding")

  const expect = false

  t.is(actual, expect)
})
