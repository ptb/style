import ava from "ava"

import { mergeArrOfObj } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = mergeArrOfObj()

  const expect = undefined

  t.is(actual, expect)
})

ava("given an array of objects", (t) => {
  const actual = mergeArrOfObj([{ "a": "b" }, { "c": "d" }])

  const expect = {
    "a": "b",
    "c": "d"
  }

  t.deepEqual(actual, expect)
})

ava("given an array with object and string", (t) => {
  const actual = mergeArrOfObj([{ "a": "b" }, "c"])

  const expect = [{ "a": "b" }, "c"]

  t.deepEqual(actual, expect)
})

ava("given several keys differing only by spaces", (t) => {
  const actual = mergeArrOfObj([
    { "&": { "a": "b" } },
    { "& ": { "c": "d" } },
    { "&": { "e": "f" } }
  ])

  const expect = { "&": { "a": "b", "e": "f" }, "& ": { "c": "d" } }

  t.deepEqual(actual, expect)
})
