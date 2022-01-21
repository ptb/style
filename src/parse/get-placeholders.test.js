import ava from "ava"

import { getPlaceholders } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getPlaceholders()

  /** @type {string[]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an array of selectors with placeholders", (t) => {
  const actual = getPlaceholders([
    "a",
    "%b",
    ".c",
    "%products",
    "%items"
  ])

  const expect = ["a", ".osnk5b", ".c", ".os8txq", ".osshkc"]

  t.deepEqual(actual, expect)
})

ava(
  "given an array of selectors with placeholders and media query array",
  (t) => {
    const actual = getPlaceholders(
      ["a", "%b", ".c", "%products", "%items"],
      ["(minWidth:768px)"]
    )

    const expect = ["a", ".ossgnr", ".c", ".oshbpq", ".oskvky"]

    t.deepEqual(actual, expect)
  }
)
