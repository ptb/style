import ava from "ava"

import { isConditional, setVariable } from "../index.js"

ava.serial("given undefined arguments", (t) => {
  const actual = isConditional("media")

  const expect = false

  t.is(actual, expect)
})

ava.serial("given object with media keys as arguments 1", (t) => {
  const actual = isConditional("media", {
    "@media (max-width: 767.98px)": {},
    "@media (min-width: 768px)": {}
  })

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with media keys as arguments 2", (t) => {
  const actual = isConditional("media", { "_": {}, "Sm": {} })

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with media keys as arguments 3", (t) => {
  const actual = isConditional("media", { "_": {}, "Sm": {}, "Xl": {} })

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with media keys as arguments 4", (t) => {
  setVariable({
    "property": "$media",
    "value": {
      "Xxl": "(minWidth:1536px)"
    }
  })

  const actual = isConditional("media", { "_": {}, "Sm": {}, "Xxl": {} })

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with media keys as arguments 5", (t) => {
  const actual = isConditional("media", {
    "@media (max-width: 767.98px)": {},
    "@media (min-width: 768px)": {},
    "_": {},
    "Sm": {},
    "Xxl": {}
  })

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with media keys as arguments 6", (t) => {
  const actual = isConditional("media", {
    "@media (max-width: 767.98px)": {},
    "@media (min-width: 768px)": {},
    "_": {},
    "Sm": {},
    "Xl": {}
  })

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with media keys as arguments 7", (t) => {
  const actual = isConditional("media", {
    "seven": {},
    "six": {}
  })

  const expect = false

  t.is(actual, expect)
})

ava.serial("given object with media property 1", (t) => {
  const actual = isConditional(
    "media",
    {},
    "@media (min-width: 768px)"
  )

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with media property 2", (t) => {
  const actual = isConditional("media", {}, "R")

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with non-media property", (t) => {
  const actual = isConditional("media", {}, "display")

  const expect = false

  t.is(actual, expect)
})

ava.serial("given undefined arguments for @supports", (t) => {
  const actual = isConditional("supports")

  const expect = false

  t.is(actual, expect)
})

ava.serial(
  "given object with feature query keys as arguments 1",
  (t) => {
    setVariable({
      "property": "$supports",
      "value": {
        "hasFlex": "(display:flex)",
        "hasGrid": "(display:grid)"
      }
    })

    const actual = isConditional("supports", {
      "hasFlex": {},
      "hasGrid": {}
    })

    const expect = true

    t.is(actual, expect)
  }
)

ava.serial(
  "given object with feature query keys as arguments 2",
  (t) => {
    const actual = isConditional("supports", {
      "hasFlex": {},
      "hasFloat": {},
      "hasGrid": {}
    })

    const expect = true

    t.is(actual, expect)
  }
)

ava.serial(
  "given object with feature query keys as arguments 3",
  (t) => {
    const actual = isConditional("supports", {
      "@supports (display:flex)": {}
    })

    const expect = true

    t.is(actual, expect)
  }
)

ava.serial(
  "given object with feature query keys as arguments 4",
  (t) => {
    const actual = isConditional("supports", { "display": {} })

    const expect = false

    t.is(actual, expect)
  }
)

ava.serial("given object with supports property", (t) => {
  const actual = isConditional(
    "supports",
    {},
    "@supports (display:inline-grid)"
  )

  const expect = true

  t.is(actual, expect)
})

ava.serial("given object with non-supports property", (t) => {
  const actual = isConditional("supports", {}, "display")

  const expect = false

  t.is(actual, expect)
})
