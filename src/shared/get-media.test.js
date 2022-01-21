import ava from "ava"

import { getMedia } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getMedia()

  const expect = ""

  t.is(actual, expect)
})

ava("given empty array", (t) => {
  const actual = getMedia([])

  const expect = ""

  t.is(actual, expect)
})

ava("given array of kebab-case media queries", (t) => {
  const actual = getMedia(["screen", "(max-width:767.98px)"])

  const expect = "(max-width:767.98px) and screen"

  t.is(actual, expect)
})

ava("given array of camelCase media queries", (t) => {
  const actual = getMedia([
    "(WebkitMinDevicePixelRatio: 2),(minResolution: 192dpi)",
    "print ",
    " (minWidth: 768px)"
  ])

  const expect =
    "(-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi) and (min-width:768px) and print"

  t.is(actual, expect)
})

ava("given array of camelCase media queries and a number", (t) => {
  const actual = getMedia([" (minWidth:   768px)  ", 2])

  const expect = "(min-width:768px)"

  t.is(actual, expect)
})
