import ava from "ava"

import { getAncestors } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getAncestors()

  /** @type {string[][]} */
  const expect = []

  t.deepEqual(actual, expect)
})

ava("given an array of selectors without ancestors", (t) => {
  const actual = getAncestors([], [["#root"]])

  const expect = [["#root"]]

  t.deepEqual(actual, expect)
})

ava(
  "given an array of selectors with implied ancestor location",
  (t) => {
    const actual = getAncestors([["#root"]], [["#body"]])

    const expect = [["#root", " ", "#body"]]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an array of selectors with defined ancestor prefix",
  (t) => {
    const actual = getAncestors([["#root"]], [["&", " ", "#body"]])

    const expect = [["#root", " ", "#body"]]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an array of selectors with defined ancestor suffix",
  (t) => {
    const actual = getAncestors([["#root"]], [["#body", " ", "&"]])

    const expect = [["#body", " ", "#root"]]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an array of selectors with defined ancestor middle",
  (t) => {
    const actual = getAncestors(
      [["#root"]],
      [["#body", " ", "&", " ", "%thing"]]
    )

    const expect = [["#body", " ", "#root", " ", "%thing"]]

    t.deepEqual(actual, expect)
  }
)

ava("given an array of selectors with array of ancestors", (t) => {
  const actual = getAncestors(
    [["#root", "#body"], ["%test"]],
    [
      ["#more", ">", "%stuff"],
      ["#thing", " ", "&", "+", "%thing"]
    ]
  )

  const expect = [
    ["#root", "#body", " ", "#more", ">", "%stuff"],
    ["%test", " ", "#more", ">", "%stuff"],
    ["#thing", " ", "#root", "#body", "+", "%thing"],
    ["#thing", " ", "%test", "+", "%thing"]
  ]

  t.deepEqual(actual, expect)
})
