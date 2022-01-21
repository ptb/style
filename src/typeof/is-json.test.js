import ava from "ava"

import { isJSON } from "../index.js"

ava("geven undefined arguments", (t) => {
  const actual = isJSON(undefined)

  const expect = false

  t.is(actual, expect)
})

ava("given an array", (t) => {
  const actual = isJSON([])

  const expect = true

  t.is(actual, expect)
})

ava("given a string quoted array", (t) => {
  const actual = isJSON("[]")

  const expect = true

  t.is(actual, expect)
})

/* prettier-ignore */
ava("given an object", (t) => {
  /* eslint-disable-next-line */
  const actual = isJSON ({ a: 'b' })

  const expect = true

  t.is(actual, expect)
})

ava("given a string quoted object", (t) => {
  const actual = isJSON('{ "a": "b" }')

  const expect = true

  t.is(actual, expect)
})

ava("given an invalid string quoted object", (t) => {
  const actual = isJSON('{ "a": }')

  const expect = false

  t.is(actual, expect)
})
