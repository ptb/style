import ava from "ava"

import { nanoid } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = nanoid().length

  const expect = 21

  t.is(actual, expect)
})
