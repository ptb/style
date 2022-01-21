import ava from "ava"

import { getStyle, parse } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getStyle()
  const expect = ""

  t.is(actual, expect)
})

ava("given an object with valid params", (t) => {
  const actual = getStyle(
    parse({ "input": { "backgroundColor": "#f00" } }, "", true).shift()
  )

  const expect = ".kclzxd{background-color:#f00}"

  t.is(actual, expect)
})

ava("given an object with valid params and mq = true", (t) => {
  const actual = getStyle(
    parse({ "input": { "backgroundColor": "#f00" } }, "", true).shift(),
    true
  )

  const expect = ".kclzxd{background-color:#f00}"

  t.is(actual, expect)
})

ava(
  "given an object with valid params and media and mq = true",
  (t) => {
    const actual = getStyle(
      parse(
        {
          "conditional": { "media": ["(minWidth:768px)"] },
          "input": { "backgroundColor": "#f00" }
        },
        "",
        true
      ).shift(),
      true
    )

    const expect =
      "@media (min-width:768px){.kczhp8{background-color:#f00}}"

    t.is(actual, expect)
  }
)

ava("given an object with @supports query", (t) => {
  const actual = getStyle(
    parse(
      {
        "conditional": {
          "supports": ["(display: grid)", "(color: hsl(0,0%,0%))"]
        },
        "input": { "color": "hsl(0,0%,0%)" }
      },
      "",
      true
    ).shift(),
    true
  )

  const expect =
    "@supports ((color:hsl(0,0%,0%)) and (display:grid)){.k056ij{color:hsl(0,0%,0%)}}"

  t.is(actual, expect)
})

ava("given an object with @supports and @media query", (t) => {
  const actual = getStyle(
    parse(
      {
        "conditional": {
          "media": ["(minWidth:768px)"],
          "supports": ["(color:hsl(0,0%,0%))"]
        },
        "input": { "color": "hsl(0,0%,0%)" }
      },
      "",
      true
    ).shift(),
    true
  )

  const expect =
    "@media (min-width:768px){@supports (color:hsl(0,0%,0%)){.k06jda{color:hsl(0,0%,0%)}}}"

  t.is(actual, expect)
})
