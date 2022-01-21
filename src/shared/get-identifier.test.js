import ava from "ava"

import { getIdentifier } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = getIdentifier()

  const expect = null

  t.deepEqual(actual, expect)
})

ava("given an object with undefined identifier (1)", (t) => {
  const actual = getIdentifier({
    "property": "backgroundColor",
    "value": "#f00"
  })

  const expect = "kclzxd"

  t.deepEqual(actual, expect)
})

ava("given an object with undefined identifier (2)", (t) => {
  const actual = getIdentifier({
    "property": "backgroundColor",
    "value": "#0f0"
  })

  const expect = "kcbfig"

  t.deepEqual(actual, expect)
})

ava("given an object with undefined identifier (3)", (t) => {
  const actual = getIdentifier({
    "property": "color",
    "value": "#0f0"
  })

  const expect = "k0bfig"

  t.deepEqual(actual, expect)
})

ava(
  "given an object with undefined identifier and media (1)",
  (t) => {
    const actual = getIdentifier({
      "conditional": {
        "media": ["(max-width: 767px)"]
      },
      "property": "color",
      "value": "#0f0"
    })

    const expect = "k0nuyt"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier and media (2)",
  (t) => {
    const actual = getIdentifier({
      "conditional": { "media": ["(min-width: 768px)"] },
      "property": "color",
      "value": "#0f0"
    })

    const expect = "k0gvt2"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier and selectors (1)",
  (t) => {
    const actual = getIdentifier({
      "property": "color",
      "selectors": [[":active"]],
      "value": "#0f0"
    })

    const expect = "k0ucb4"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier and selectors (2)",
  (t) => {
    const actual = getIdentifier({
      "property": "color",
      "selectors": [[":hover"]],
      "value": "#0f0"
    })

    const expect = "k0tq81"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier, media, and selectors",
  (t) => {
    const actual = getIdentifier({
      "conditional": { "media": ["(min-width: 768px)"] },
      "property": "color",
      "selectors": [[":hover"]],
      "value": "#0f0"
    })

    const expect = "k0lki8"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with undefined identifier with selectors",
  (t) => {
    const actual = getIdentifier({
      "property": "background-color",
      "selectors": [[".abcde"]],
      "value": "#f00"
    })

    const expect = "kcrytl"

    t.deepEqual(actual, expect)
  }
)

ava("given an object with defined identifier", (t) => {
  const actual = getIdentifier({
    "identifier": "abcdef",
    "property": "background-color",
    "value": "#f00"
  })

  const expect = "abcdef"

  t.deepEqual(actual, expect)
})

ava(
  "given an object with valid camel-case property without value",
  (t) => {
    const actual = getIdentifier({
      "property": "backgroundColor"
    })

    const expect = "kcphmt"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid camel-case property and value",
  (t) => {
    const actual = getIdentifier({
      "property": "backgroundColor",
      "value": "#000"
    })

    const expect = "kc26hh"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid kebab-case property and value",
  (t) => {
    const actual = getIdentifier({
      "property": "background-color",
      "value": "#000"
    })

    const expect = "kc26hh"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid property, value, and selectors",
  (t) => {
    const actual = getIdentifier({
      "property": "background-color",
      "selectors": [[":hover"]],
      "value": "#000"
    })

    const expect = "kco8yv"

    t.deepEqual(actual, expect)
  }
)

ava("given an object with valid property, value, and media", (t) => {
  const actual = getIdentifier({
    "conditional": { "media": ["(min-width: 768px)"] },
    "property": "background-color",
    "value": "#000"
  })

  const expect = "kcgvt2"

  t.deepEqual(actual, expect)
})

ava(
  "given an object with valid property, value, media, and selectors",
  (t) => {
    const actual = getIdentifier({
      "conditional": { "media": ["(min-width: 768px)"] },
      "property": "background-color",
      "selectors": [[":hover"]],
      "value": "#000"
    })

    const expect = "kco031"

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with valid property, value, media, and `:root` selector",
  (t) => {
    const actual = getIdentifier({
      "conditional": { "media": ["(min-width: 768px)"] },
      "property": "background-color",
      "selectors": [[":root"]],
      "value": "#000"
    })

    const expect = "kcjt9k"

    t.deepEqual(actual, expect)
  }
)
