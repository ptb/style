/*
  eslint-disable
    @typescript-eslint/no-empty-function,
    no-empty-function,
 */

import ava from "ava"

import { cloneObj } from "../index.js"

ava("given undefined argument", (t) => {
  const actual = cloneObj(undefined)

  const expect = undefined

  t.is(actual, expect)
})

ava("given null", (t) => {
  const actual = cloneObj(null)

  const expect = null

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = cloneObj("")

  const expect = ""

  t.is(actual, expect)
})
