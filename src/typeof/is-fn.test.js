/*
  eslint-disable
    @typescript-eslint/no-empty-function,
    func-name-matching,
    func-style,
    no-empty-function
 */

import ava from "ava"

import { isFn } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isFn(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = isFn("")

  const expect = false

  t.deepEqual(actual, expect)
})

ava("given an function declaration", (t) => {
  const actual = isFn(function () {})

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an function expression (1)", (t) => {
  const fn = function func () {
    return true
  }

  const actual = isFn(fn)

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an function expression (2)", (t) => {
  const fn = function () {
    return true
  }

  const actual = isFn(fn)

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an arrow function (1)", (t) => {
  const actual = isFn(() => {})

  const expect = true

  t.deepEqual(actual, expect)
})

ava("given an arrow function (2)", (t) => {
  const fn = () => {}

  const actual = isFn(fn)

  const expect = true

  t.deepEqual(actual, expect)
})
