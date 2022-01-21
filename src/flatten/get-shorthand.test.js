import ava from "ava"

import { getShorthand } from "../index.js"

ava("given undefined arguments", (t) => {
  // @ts-ignore
  const actual = getShorthand()

  const expect = {}

  t.deepEqual(actual, expect)
})

ava("given a 'mx' property and integer value", (t) => {
  const actual = getShorthand("mx", 12)

  const expect = {
    "marginLeft": 12,
    "marginRight": 12
  }

  t.deepEqual(actual, expect)
})

ava("given a 'size' property and integer value", (t) => {
  const actual = getShorthand("size", 8)

  const expect = {
    "height": 8,
    "width": 8
  }

  t.deepEqual(actual, expect)
})

ava("given a 'bg' property and color value", (t) => {
  const actual = getShorthand("bg", "#f00")

  const expect = {
    "backgroundColor": "#f00"
  }

  t.deepEqual(actual, expect)
})

ava("given a 'marginHorizontal' property and integer value", (t) => {
  const actual = getShorthand("marginHorizontal", 6)

  const expect = {
    "marginLeft": 6,
    "marginRight": 6
  }

  t.deepEqual(actual, expect)
})

ava("given a 'marginY' property and integer value", (t) => {
  const actual = getShorthand("marginY", 10)

  const expect = {
    "marginBottom": 10,
    "marginTop": 10
  }

  t.deepEqual(actual, expect)
})

ava("given a 'paddingX' property and integer value", (t) => {
  const actual = getShorthand("paddingX", 4)

  const expect = {
    "paddingLeft": 4,
    "paddingRight": 4
  }

  t.deepEqual(actual, expect)
})

ava("given a 'paddingVertical' property and integer value", (t) => {
  const actual = getShorthand("paddingVertical", 2)

  const expect = {
    "paddingBottom": 2,
    "paddingTop": 2
  }

  t.deepEqual(actual, expect)
})

ava("given a 'paddingBottom' property and integer value", (t) => {
  const actual = getShorthand("paddingBottom", 14)

  const expect = {
    "paddingBottom": 14
  }

  t.deepEqual(actual, expect)
})

ava("given a 'pb' property and integer value", (t) => {
  const actual = getShorthand("pb", 12)

  const expect = {
    "paddingBottom": 12
  }

  t.deepEqual(actual, expect)
})
