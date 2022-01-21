/*
  eslint-disable
    compat/compat
 */

import ava from "ava"

import { isSym } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isSym(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = isSym("")

  const expect = false

  t.deepEqual(actual, expect)
})

ava("given an empty symbol", (t) => {
  const sym = Symbol()

  const actual = isSym(sym)

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an symbol with label", (t) => {
  const sym = Symbol("sym")

  const actual = isSym(sym)

  const expect = true

  t.deepEqual(actual, expect)
})
