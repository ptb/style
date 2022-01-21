/*
  eslint-disable
    @typescript-eslint/no-empty-function,
    no-empty-function
 */

import ava from "ava"

import { canMerge } from "../index.js"

ava("given undefined argument", (t) => {
  const actual = canMerge(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given a date", (t) => {
  const actual = canMerge(new Date())

  const expect = false

  t.is(actual, expect)
})

ava("given an array", (t) => {
  const actual = canMerge([])

  const expect = true

  t.is(actual, expect)
})

ava("given a function", (t) => {
  const actual = canMerge(function () {})

  const expect = false

  t.is(actual, expect)
})

ava("given null", (t) => {
  const actual = canMerge(null)

  const expect = false

  t.is(actual, expect)
})

ava("given an object", (t) => {
  const actual = canMerge({})

  const expect = true

  t.is(actual, expect)
})

ava("given a regex", (t) => {
  const actual = canMerge(/iP(?:hone|[ao]d)/u)

  const expect = false

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = canMerge("")

  const expect = false

  t.is(actual, expect)
})
