import ava from "ava"

import { get } from "../index.js"

ava("given empty arguments", (t) => {
  const actual = get({}, "")

  const expect = undefined

  t.is(actual, expect)
})

ava("given array", (t) => {
  const actual = get([""], "")

  const expect = undefined

  t.is(actual, expect)
})

ava("given object without key", (t) => {
  const actual = get({ "a": "b" }, "b")

  const expect = undefined

  t.is(actual, expect)
})

ava("given object with key", (t) => {
  const actual = get({ "b": "c" }, "b")

  const expect = "c"

  t.is(actual, expect)
})

ava("given object with array of keys", (t) => {
  const actual = get({ "a": { "b": { "c": "moose" } } }, ["a", "b", "c"])

  const expect = "moose"

  t.is(actual, expect)
})
