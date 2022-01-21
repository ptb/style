import ava from "ava"

import { toPairs } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = toPairs()

  /** @type {[string, any][]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an object with property string and null value", (t) => {
  const actual = toPairs({ "color": null })

  /** @type {[string, any][]} */
  const expect = [["color", null]]

  t.deepEqual(actual, expect)
})

ava("given an object with property string and boolean value", (t) => {
  const actual = toPairs({ "color": true })

  /** @type {[string, any][]} */
  const expect = [["color", true]]

  t.deepEqual(actual, expect)
})

ava("given an object with property string and number value", (t) => {
  const actual = toPairs({ "margin": 0 })

  /** @type {[string, any][]} */
  const expect = [["margin", 0]]

  t.deepEqual(actual, expect)
})

ava("given an object with property string and string value", (t) => {
  const actual = toPairs({ "color": "red" })

  /** @type {[string, any][]} */
  const expect = [["color", "red"]]

  t.deepEqual(actual, expect)
})

ava("given an object with property string and array value", (t) => {
  const actual = toPairs({ "color": [0, 1] })

  /** @type {[string, any][]} */
  const expect = [["color", [0, 1]]]

  t.deepEqual(actual, expect)
})

ava("given an object with property string and object value", (t) => {
  const actual = toPairs({ "color": { "a": 1 } })

  /** @type {[string, any][]} */
  const expect = [["color", { "a": 1 }]]

  t.deepEqual(actual, expect)
})
