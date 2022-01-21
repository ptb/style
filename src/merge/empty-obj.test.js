import ava from "ava"

import { emptyObj } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = emptyObj(undefined)

  const expect = {}

  t.deepEqual(actual, expect)
})

ava("given an array as value", (t) => {
  const actual = emptyObj(["a"])

  /** @type {any[]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an object as value", (t) => {
  const actual = emptyObj({ "a": null })

  const expect = {}

  t.deepEqual(actual, expect)
})
