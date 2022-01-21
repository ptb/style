/*
  eslint-disable
    compat/compat
 */

import ava from "ava"

import { assignProp } from "../index.js"

ava("given valid arguments (1)", (t) => {
  const actual = assignProp({}, { "a": "b" }, "a", "c")

  const expect = { "a": "c" }

  t.deepEqual(actual, expect)
})

ava("given valid arguments (2)", (t) => {
  const actual = assignProp({}, { "a": "b" }, "b", "c")

  const expect = {}

  t.deepEqual(actual, expect)
})

ava("given valid arguments (3)", (t) => {
  const actual = Object.getOwnPropertyNames(
    assignProp({}, { "a": "b" }, "b", "c")
  )

  const expect = ["b"]

  t.deepEqual(actual, expect)
})

ava("given valid arguments (4)", (t) => {
  const actual = assignProp({}, { [Symbol("a")]: "b" }, "b", "c")

  const expect = {}

  t.deepEqual(actual, expect)
})

ava("given valid arguments (5)", (t) => {
  const actual = Object.getOwnPropertyNames(
    assignProp({}, { [Symbol("a")]: "b" }, "b", "c")
  )

  const expect = ["b"]

  t.deepEqual(actual, expect)
})

ava("given valid arguments (6)", (t) => {
  const actual = Object.getOwnPropertySymbols(
    assignProp({}, { [Symbol("a")]: "b" }, "b", "c")
  )

  /** @type {symbol[]} */
  const expect = []

  t.deepEqual(actual, expect)
})
