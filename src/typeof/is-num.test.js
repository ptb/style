import ava from "ava"

import { isNum } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isNum(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = isNum("")

  const expect = false

  t.deepEqual(actual, expect)
})

ava("given a positive number", (t) => {
  const actual = isNum(1)

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an negative number", (t) => {
  const actual = isNum(-1)

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an NaN", (t) => {
  const actual = isNum(NaN)

  const expect = false

  t.deepEqual(actual, expect)
})
