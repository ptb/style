/*
  eslint-disable
    no-new-object
 */

import ava from "ava"

import { isObj } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isObj(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given an object (1)", (t) => {
  const actual = isObj({})

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an object (2)", (t) => {
  const actual = isObj(new Object())

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an object (3)", (t) => {
  const actual = isObj(new Map())

  const expect = false

  t.deepEqual(actual, expect)
})

ava("given a string", (t) => {
  const actual = isObj("")

  const expect = false

  t.deepEqual(actual, expect)
})
