import ava from "ava"

import { mergeArr } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = mergeArr(undefined, "")

  const expect = ""

  t.is(actual, expect)
})

ava("given arrays as arguments", (t) => {
  const actual = mergeArr(["a"], ["b"])

  /** @type {string[]} */
  const expect = ["a", "b"]

  t.deepEqual(actual, expect)
})

ava("given objects as arguments", (t) => {
  const actual = mergeArr({ "a": null }, {})

  const expect = {}

  t.deepEqual(actual, expect)
})
