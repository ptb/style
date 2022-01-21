import ava from "ava"

import { isPlaceholder } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = isPlaceholder()

  const expect = false

  t.is(actual, expect)
})

ava("given placeholder string (1)", (t) => {
  const actual = isPlaceholder("%background")

  const expect = true

  t.is(actual, expect)
})

ava("given placeholder string (2)", (t) => {
  const actual = isPlaceholder("%backgroundColor")

  const expect = true

  t.is(actual, expect)
})

ava("given a string", (t) => {
  const actual = isPlaceholder("voiceDuration")

  const expect = false

  t.is(actual, expect)
})
