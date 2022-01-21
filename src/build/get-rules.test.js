import ava from "ava"

import { getRules } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getRules()

  const expect = ""

  t.is(actual, expect)
})
