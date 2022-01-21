import ava from "ava"

import { getSelectorsString } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getSelectorsString()

  const expect = ""

  t.is(actual, expect)
})

ava("given an object with empty selectors (1)", (t) => {
  const actual = getSelectorsString({
    "selectors": []
  })

  const expect = ""

  t.is(actual, expect)
})

ava("given an object with empty selectors (2)", (t) => {
  const actual = getSelectorsString({
    "selectors": [[]]
  })

  const expect = ""

  t.is(actual, expect)
})

ava("given an object with single selector (1)", (t) => {
  const actual = getSelectorsString({
    "selectors": [[".abcde"]]
  })

  const expect = ".abcde"

  t.is(actual, expect)
})

ava("given an object with single selector (2)", (t) => {
  const actual = getSelectorsString({
    "selectors": [[".abcde", ">", ".fghij"]]
  })

  const expect = ".abcde>.fghij"

  t.is(actual, expect)
})

ava("given an object with multiple selectors (1)", (t) => {
  const actual = getSelectorsString({
    "selectors": [[".abcde"], [".fghij"]]
  })

  const expect = ".abcde,.fghij"

  t.is(actual, expect)
})

ava("given an object with multiple selectors (2)", (t) => {
  const actual = getSelectorsString({
    "selectors": [[".abcde", ":hover"], [".fghij"]]
  })

  const expect = ".abcde:hover,.fghij"

  t.is(actual, expect)
})
