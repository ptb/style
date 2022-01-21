/*
  eslint-disable
    @typescript-eslint/no-empty-function,
    func-name-matching,
    func-style,
    no-empty-function
 */

import ava from "ava"

import { isNull } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isNull(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given null", (t) => {
  const actual = isNull(null)

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given a string", (t) => {
  const actual = isNull("")

  const expect = false

  t.deepEqual(actual, expect)
})
