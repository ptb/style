import ava from "ava"
import { parseIdentifier } from "./parse-identifier.js"

ava ("given undefined arguments", (t) => {
  const actual = parseIdentifier ()
  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier (1)", (t) => {
  const actual = parseIdentifier ({
    "property": "backgroundColor",
    "value": "#f00"
  })

  const expect = {
    "identifier": "jtx2a9",
    "property": "backgroundColor",
    "selectors": [[".jtx2a9"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier (2)", (t) => {
  const actual = parseIdentifier ({
    "property": "backgroundColor",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jtxz4h",
    "property": "backgroundColor",
    "selectors": [[".jtxz4h"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier (3)", (t) => {
  const actual = parseIdentifier ({
    "property": "color",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkxz4h",
    "property": "color",
    "selectors": [[".jkxz4h"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and media (1)", (t) => {
  const actual = parseIdentifier ({
    "media": "(max-width: 767px)",
    "property": "color",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkommt",
    "media": "(max-width: 767px)",
    "property": "color",
    "selectors": [[".jkommt"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and media (2)", (t) => {
  const actual = parseIdentifier ({
    "media": "(min-width: 768px)",
    "property": "color",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jk9duu",
    "media": "(min-width: 768px)",
    "property": "color",
    "selectors": [[".jk9duu"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and selectors (1)", (t) => {
  const actual = parseIdentifier ({
    "property": "color",
    "selectors": [[":active"]],
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkek07",
    "property": "color",
    "selectors": [[".jkek07", ":active"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and selectors (2)", (t) => {
  const actual = parseIdentifier ({
    "property": "color",
    "selectors": [[":hover"]],
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkrgwd",
    "property": "color",
    "selectors": [[".jkrgwd", ":hover"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava (
  "given an object with undefined identifier, media, and selectors",
  (t) => {
    const actual = parseIdentifier ({
      "media": "(min-width: 768px)",
      "property": "color",
      "selectors": [[":hover"]],
      "value": "#0f0"
    })

    const expect = {
      "identifier": "jk0da2",
      "media": "(min-width: 768px)",
      "property": "color",
      "selectors": [[".jk0da2", ":hover"]],
      "value": "#0f0"
    }

    t.deepEqual (actual, expect)
  }
)

ava ("given an object with undefined identifier with selectors", (t) => {
  const actual = parseIdentifier ({
    "property": "background-color",
    "selectors": [[".abcde"]],
    "value": "#f00"
  })

  const expect = {
    "identifier": "jtc5lu",
    "property": "background-color",
    "selectors": [[".abcde"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with defined identifier", (t) => {
  const actual = parseIdentifier ({
    "identifier": "abcde",
    "property": "background-color",
    "value": "#f00"
  })

  const expect = {
    "identifier": "abcde",
    "property": "background-color",
    "selectors": [[".abcde"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid camel-case property and value", (t) => {
  const actual = parseIdentifier ({
    "property": "backgroundColor",
    "value": "#000"
  })

  const expect = {
    "identifier": "jtw37r",
    "property": "backgroundColor",
    "selectors": [[".jtw37r"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid kebab-case property and value", (t) => {
  const actual = parseIdentifier ({
    "property": "background-color",
    "value": "#000"
  })

  const expect = {
    "identifier": "jtw37r",
    "property": "background-color",
    "selectors": [[".jtw37r"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid property, value, and selectors", (t) => {
  const actual = parseIdentifier ({
    "property": "background-color",
    "selectors": [[":hover"]],
    "value": "#000"
  })

  const expect = {
    "identifier": "jtqa6z",
    "property": "background-color",
    "selectors": [[".jtqa6z", ":hover"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid property, value, and media", (t) => {
  const actual = parseIdentifier ({
    "media": "(min-width: 768px)",
    "property": "background-color",
    "value": "#000"
  })

  const expect = {
    "identifier": "jtb0ac",
    "media": "(min-width: 768px)",
    "property": "background-color",
    "selectors": [[".jtb0ac"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava (
  "given an object with valid property, value, media, and selectors",
  (t) => {
    const actual = parseIdentifier ({
      "media": "(min-width: 768px)",
      "property": "background-color",
      "selectors": [[":hover"]],
      "value": "#000"
    })

    const expect = {
      "identifier": "jt1do0",
      "media": "(min-width: 768px)",
      "property": "background-color",
      "selectors": [[".jt1do0", ":hover"]],
      "value": "#000"
    }

    t.deepEqual (actual, expect)
  }
)
