import ava from "ava"

import { mergeObj } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = mergeObj(undefined, "")

  const expect = ""

  t.is(actual, expect)
})

ava("given arrays as arguments", (t) => {
  const actual = mergeObj(["a"], ["b"])

  /** @type {string[]} */
  const expect = ["b"]

  t.deepEqual(actual, expect)
})

ava("given objects as arguments", (t) => {
  const actual = mergeObj({ "a": null }, { "b": "c" })

  const expect = { "a": null, "b": "c" }

  t.deepEqual(actual, expect)
})

ava("given undefined value as arguments", (t) => {
  const actual = mergeObj({ "a": undefined }, { "b": "c" })

  const expect = { "a": undefined, "b": "c" }

  t.deepEqual(actual, expect)
})
