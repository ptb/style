import ava from "ava"

import { getSelectors } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getSelectors()

  const expect = [[]]

  t.deepEqual(actual, expect)
})

ava("given a string with ancestor selector", (t) => {
  const actual = getSelectors("&")

  const expect = [["&"]]

  t.deepEqual(actual, expect)
})

ava("given a string with an id selector", (t) => {
  const actual = getSelectors("#a")

  const expect = [["#a"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a class selector", (t) => {
  const actual = getSelectors(".a")

  const expect = [[".a"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a suffix selector", (t) => {
  const actual = getSelectors("$a")

  const expect = [["$a"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a placeholder selector", (t) => {
  const actual = getSelectors("%a")

  const expect = [["%a"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a prefix selector", (t) => {
  const actual = getSelectors("^a")

  const expect = [["^a"]]

  t.deepEqual(actual, expect)
})

ava("given a string with an attribute selector (1)", (t) => {
  const actual = getSelectors("[a]")

  const expect = [["[a]"]]

  t.deepEqual(actual, expect)
})

ava("given a string with an attribute selector (2)", (t) => {
  const actual = getSelectors("[class=x]")

  const expect = [["[class=x]"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a pseudo-class selector (1)", (t) => {
  const actual = getSelectors(":first-child")

  const expect = [[":first-child"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a pseudo-class selector (2)", (t) => {
  const actual = getSelectors(":nth-child(3n+1)")

  const expect = [[":nth-child(3n+1)"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a pseudo-class selector (3)", (t) => {
  const actual = getSelectors(":is(header) p:hover")

  const expect = [[":is(header)", " ", "p", ":hover"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a pseudo-element selector", (t) => {
  const actual = getSelectors("::after")

  const expect = [["::after"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a type selector", (t) => {
  const actual = getSelectors("a")

  const expect = [["a"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a universal selector", (t) => {
  const actual = getSelectors("*")

  const expect = [["*"]]

  t.deepEqual(actual, expect)
})

ava("given a string with a complex selector", (t) => {
  const actual = getSelectors("&#a.b%c[d]::after li ~ *")

  const expect = [
    ["&", "#a", ".b", "%c", "[d]", "::after", " ", "li", "~", "*"]
  ]

  t.deepEqual(actual, expect)
})

ava("given a string with multiple complex selectors", (t) => {
  const actual = getSelectors(
    "& > div::hover, li[aria-expanded=true]"
  )

  const expect = [
    ["&", ">", "div", "::hover"],
    ["li", "[aria-expanded=true]"]
  ]

  t.deepEqual(actual, expect)
})
