import ava from "ava"

import { uniq } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = uniq()

  /** @type {string[]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an array without duplicates", (t) => {
  const actual = uniq(["abc", "def", "ghi"])

  const expect = ["abc", "def", "ghi"]

  t.deepEqual(actual, expect)
})

ava("given an array with duplicates", (t) => {
  const actual = uniq(["abc", "def", "abc", "def", "ghi"])

  const expect = ["abc", "def", "ghi"]

  t.deepEqual(actual, expect)
})
