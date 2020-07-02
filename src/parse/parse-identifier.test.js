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
    "identifier": "jsx2a9",
    "property": "backgroundColor",
    "selectors": [[".jsx2a9"]],
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
    "identifier": "jsxz4h",
    "property": "backgroundColor",
    "selectors": [[".jsxz4h"]],
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
    "identifier": "jjxz4h",
    "property": "color",
    "selectors": [[".jjxz4h"]],
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
    "identifier": "jjommt",
    "media": "(max-width: 767px)",
    "property": "color",
    "selectors": [[".jjommt"]],
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
    "identifier": "jj9duu",
    "media": "(min-width: 768px)",
    "property": "color",
    "selectors": [[".jj9duu"]],
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
    "identifier": "jjek07",
    "property": "color",
    "selectors": [[".jjek07", ":active"]],
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
    "identifier": "jjrgwd",
    "property": "color",
    "selectors": [[".jjrgwd", ":hover"]],
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
      "identifier": "jj0da2",
      "media": "(min-width: 768px)",
      "property": "color",
      "selectors": [[".jj0da2", ":hover"]],
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
    "identifier": "jsc5lu",
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
    "identifier": "jsw37r",
    "property": "backgroundColor",
    "selectors": [[".jsw37r"]],
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
    "identifier": "jsw37r",
    "property": "background-color",
    "selectors": [[".jsw37r"]],
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
    "identifier": "jsqa6z",
    "property": "background-color",
    "selectors": [[".jsqa6z", ":hover"]],
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
    "identifier": "jsb0ac",
    "media": "(min-width: 768px)",
    "property": "background-color",
    "selectors": [[".jsb0ac"]],
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
      "identifier": "js1do0",
      "media": "(min-width: 768px)",
      "property": "background-color",
      "selectors": [[".js1do0", ":hover"]],
      "value": "#000"
    }

    t.deepEqual (actual, expect)
  }
)
