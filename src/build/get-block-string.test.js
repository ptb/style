import ava from "ava"

import { getBlockString } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getBlockString()

  const expect = [""]

  t.deepEqual(actual, expect)
})

ava("given a block with simple property and value", (t) => {
  const actual = getBlockString({
    "block": [{ "background-color": "#f00" }]
  })

  const expect = ["background-color:#f00"]

  t.deepEqual(actual, expect)
})

ava("given a block with fallback properties and value", (t) => {
  const actual = getBlockString({
    "block": [
      { "background-color": "#f00" },
      { "background-color": "rgba(255, 0, 0, 0.9)" }
    ]
  })

  const expect = [
    "background-color:#f00;background-color:rgba(255, 0, 0, 0.9)"
  ]

  t.deepEqual(actual, expect)
})

ava("given a block with keyframes object", (t) => {
  const actual = getBlockString({
    "block": [
      { "0%": { "backgroundColor": "#f00", "opacity": 0 } },
      { "100%": { "backgroundColor": "#0f0", "opacity": 1 } }
    ]
  })

  const expect = [
    "0%{background-color:#f00;opacity:0}100%{background-color:#0f0;opacity:1}"
  ]

  t.deepEqual(actual, expect)
})

ava("given a block with a CSS custom property 1", (t) => {
  const actual = getBlockString(
    {
      "block": [{ "--primary-color": "#9c9" }]
    },
    true
  )

  const expect = ["--primary-color:#9c9"]

  t.deepEqual(actual, expect)
})

ava("given a block with a CSS custom property 2", (t) => {
  const actual = getBlockString(
    {
      "block": [{ "--primary-color": "#9c9" }],
      "selectors": [[".afabcd"]]
    },
    true
  )

  const expect = ["--primary-color:#9c9"]

  t.deepEqual(actual, expect)
})

ava("given a block with a CSS custom property 3", (t) => {
  const actual = getBlockString(
    {
      "block": [{ "--primary-color": "#9c9" }],
      "selectors": [[":root"]]
    },
    true
  )

  const expect = [":root{--primary-color}"]

  t.deepEqual(actual, expect)
})
