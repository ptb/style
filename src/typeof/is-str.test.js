import ava from "ava"

import { isStr } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isStr(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = isStr("")

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given a number", (t) => {
  const actual = isStr(1)

  const expect = false

  t.deepEqual(actual, expect)
})

ava("given an NaN", (t) => {
  const actual = isStr(NaN)

  const expect = false

  t.deepEqual(actual, expect)
})
