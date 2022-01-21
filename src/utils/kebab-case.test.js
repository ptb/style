import ava from "ava"

import { kebabCase } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = kebabCase()

  const expect = ""

  t.is(actual, expect)
})

ava("given a string in camel-case", (t) => {
  const actual = kebabCase("backgroundColor")

  const expect = "background-color"

  t.is(actual, expect)
})

ava("given a string beginning with 'ms-'", (t) => {
  const actual = kebabCase("msAccelerator")

  const expect = "-ms-accelerator"

  t.is(actual, expect)
})

ava("given a string already in kebab-case", (t) => {
  const actual = kebabCase("background-color")

  const expect = "background-color"

  t.is(actual, expect)
})

ava("given a string with lowercase characters", (t) => {
  const actual = kebabCase("background")

  const expect = "background"

  t.is(actual, expect)
})
