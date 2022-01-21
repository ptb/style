import ava from "ava"

import { getVariables } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getVariables()

  const expect = false

  t.is(actual, expect)
})

ava("given object as argument", (t) => {
  const actual = getVariables({})

  const expect = false

  t.is(actual, expect)
})

ava("given string as argument", (t) => {
  const actual = getVariables("body")

  const expect = null

  t.is(actual, expect)
})

ava("given string with variable as argument", (t) => {
  const actual = getVariables("$unButton")

  const expect = ["$unButton"]

  t.deepEqual(actual, expect)
})

ava("given string with variables as argument", (t) => {
  const actual = getVariables("$unButton div $unCite")

  const expect = ["$unButton", "$unCite"]

  t.deepEqual(actual, expect)
})
