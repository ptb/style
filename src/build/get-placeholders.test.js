import ava from "ava"
import { getPlaceholders } from "./get-placeholders.js"

ava ("given undefined arguments", (t) => {
  const actual = getPlaceholders ()

  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an array of selectors with placeholders", (t) => {
  const actual = getPlaceholders (["a", "%b", ".c", "%products", "%items"])

  const expect = ["a", ".nbfqkz", ".c", ".nb5knd", ".nb5xpz"]

  t.deepEqual (actual, expect)
})
