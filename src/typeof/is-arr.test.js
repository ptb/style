import ava from "ava"

import { isArr } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isArr(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given a array", (t) => {
  const actual = isArr([])

  const expect = true

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = isArr("")

  const expect = false

  t.is(actual, expect)
})
