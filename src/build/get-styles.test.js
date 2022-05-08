import ava from "ava"

import { cache, getStyles, parse, store } from "../index.js"

/** @typedef {import ("..").Params} Params */

ava.serial("given undefined arguments", (t) => {
  store.clear()

  const actual = getStyles()
  const expect = ""

  t.is(actual, expect)
})

ava.serial("given an object with placeholder property", (t) => {
  cache(
    /** @type {Params} */ (
      parse({ "input": { "%figure": true } }, "abc", true).shift()
    )
  )

  const actual = getStyles()

  const expect = ""

  t.is(actual, expect)
})

ava.serial("given an object with simple property and value", (t) => {
  parse({ "input": { "mx": 10 } }, "def", true).forEach(function (style) {
    cache(style)
  })

  const actual = getStyles()

  const expect = ".eggimk{margin-right:10px}.eigimk{margin-left:10px}"

  t.is(actual, expect)
})

ava.serial("given a sample declaration", (t) => {
  parse(
    { "input": { "bg": { "_": "#363", "Md": "#696" } } },
    "ghi",
    true
  ).forEach(function (style) {
    cache(style)
  })

  const actual = getStyles()

  const expect =
    ".eggimk{margin-right:10px}.eigimk{margin-left:10px}.kcfd8m{background-color:#363}@media (min-width:768px){.kc23jv{background-color:#696}}"

  t.is(actual, expect)
})

ava.serial(
  "given an object with simple property and value (2)",
  (t) => {
    parse(
      { "input": { ":hover": { "bg": "#363" } } },
      "jkl",
      true
    ).forEach(function (style) {
      cache(style)
    })

    const actual = getStyles()

    const expect =
      ".eggimk{margin-right:10px}.eigimk{margin-left:10px}.kcfd8m,.kcrze5:hover{background-color:#363}@media (min-width:768px){.kc23jv{background-color:#696}}"

    t.is(actual, expect)
  }
)

ava.serial(
  "given an object with media query, simple property, and value",
  (t) => {
    parse(
      {
        "input": {
          "@media (maxWidth:769px)": { ":hover": { "bg": "#363" } }
        }
      },
      "mno",
      true
    ).forEach(function (style) {
      cache(style)
    })

    const actual = getStyles("(max-width:769px)")

    const expect = ".kcmppo:hover,.kcz481{background-color:#363}"

    t.is(actual, expect)
  }
)
