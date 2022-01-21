import ava from "ava"

import { camelCase } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = camelCase()

  const expect = ""

  t.is(actual, expect)
})

ava("given a string in kebab-case", (t) => {
  const actual = camelCase("background-color")

  const expect = "backgroundColor"

  t.is(actual, expect)
})

ava("given a string in camel-case", (t) => {
  const actual = camelCase("backgroundColor")

  const expect = "backgroundColor"

  t.is(actual, expect)
})

ava("given a string in lowercase", (t) => {
  const actual = camelCase("background")

  const expect = "background"

  t.is(actual, expect)
})
