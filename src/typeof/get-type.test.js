import ava from "ava"

import { getType } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getType(undefined)

  const expect = "Undefined"

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = getType("")

  const expect = "String"

  t.is(actual, expect)
})
