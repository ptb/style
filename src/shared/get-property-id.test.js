import ava from "ava"

import { getPropertyId } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getPropertyId()
  const expect = 374

  t.is(actual, expect)
})

ava("given an empty string", (t) => {
  const actual = getPropertyId("")
  const expect = 374

  t.is(actual, expect)
})

ava("given a string with an invalid property name", (t) => {
  const actual = getPropertyId("xyz")
  const expect = 374

  t.is(actual, expect)
})

ava("given a string with a valid CSS variable name (1)", (t) => {
  const actual = getPropertyId("--background-color")
  const expect = 375

  t.is(actual, expect)
})

ava("given a string with a valid CSS variable name (2)", (t) => {
  const actual = getPropertyId("-BackgroundColor")
  const expect = 375

  t.is(actual, expect)
})

ava("given a string with an valid property name (1)", (t) => {
  const actual = getPropertyId("all")
  const expect = 376

  t.is(actual, expect)
})

ava("given a string with a valid property name (2)", (t) => {
  const actual = getPropertyId("background")
  const expect = 731

  t.is(actual, expect)
})

ava("given a string with a valid property name (3)", (t) => {
  const actual = getPropertyId("background-color")
  const expect = 732

  t.is(actual, expect)
})

ava("given a string with a valid property name (4)", (t) => {
  const actual = getPropertyId("scrollBehavior")
  const expect = 555

  t.is(actual, expect)
})

ava("given a string with a valid property name (5)", (t) => {
  const actual = getPropertyId("voiceDuration")
  const expect = 890

  t.is(actual, expect)
})

ava("given a string with a prefixed property name (1)", (t) => {
  const actual = getPropertyId("-webkit-appearance")
  const expect = 485

  t.is(actual, expect)
})

ava("given a string with a prefixed property name (2)", (t) => {
  const actual = getPropertyId("MozUserSelect")
  const expect = 482

  t.is(actual, expect)
})

ava("given a string with a valid nested self class name", (t) => {
  const actual = getPropertyId("&")
  const expect = 891

  t.is(actual, expect)
})

ava("given a string with a valid placeholder class name", (t) => {
  const actual = getPropertyId("%productList")
  const expect = 892

  t.is(actual, expect)
})
