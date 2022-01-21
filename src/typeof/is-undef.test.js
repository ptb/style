import ava from "ava"

import { isUndef } from "../index.js"

ava("given a defined object", (t) => {
  const actual = isUndef("")

  const expect = false

  t.deepEqual(actual, expect)
})

ava("given an undefined object", (t) => {
  const actual = isUndef()

  const expect = true

  t.deepEqual(actual, expect)
})
