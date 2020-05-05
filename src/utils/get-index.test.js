import ava from "ava"
import { getIndex } from "./get-index.js"

ava ("given undefined arguments", (t) => {
  const actual = getIndex ()
  const expect = 0

  t.is (actual, expect)
})

ava ("given an empty rules array", (t) => {
  const actual = getIndex ([], "abc")
  const expect = 0

  t.is (actual, expect)
})

ava ("given a rules array with one item", (t) => {
  const actual = getIndex (["abc", "def"], "abc")
  const expect = 0

  t.is (actual, expect)
})

ava ("given a rules array with two items, 1", (t) => {
  const actual = getIndex (["abc", "def"], "def")
  const expect = 2

  t.is (actual, expect)
})

ava ("given a rules array with two items, 2", (t) => {
  const actual = getIndex (["abc", "def"], "ghi")
  const expect = 2

  t.is (actual, expect)
})

ava ("given a rules array with two items, 3", (t) => {
  const actual = getIndex (["aab", "abc"], "aaa")
  const expect = 0

  t.is (actual, expect)
})

ava ("given a rules array with two items, 4", (t) => {
  const actual = getIndex (["abc", "def"], "bcd")
  const expect = 1

  t.is (actual, expect)
})
