import ava from "ava"

import { cache, store } from "../index.js"

ava.serial("given undefined arguments", (t) => {
  store.clear()

  const actual = cache({})

  const expect1 = {}

  const expect2 = store.has("")
  const expect3 = store.get("")

  t.deepEqual(actual, expect1)
  t.true(expect2)
  t.true(expect3 instanceof Map)
})

ava.serial(
  "given an object with valid property and value (1)",
  (t) => {
    const actual = cache({})

    const expect = {
      "selectors": []
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (2)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#800" }],
      "selectors": []
    })

    const expect = {
      "block": [{ "border-color": "#800" }],
      "selectors": []
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (3)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#800" }],
      "selectors": [[".kh1w0f"]]
    })

    const expect = {
      "block": [{ "border-color": "#800" }],
      "selectors": [[".kh1w0f"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (4)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#800" }],
      "selectors": []
    })

    const expect = {
      "block": [{ "border-color": "#800" }],
      "selectors": [[".kh1w0f"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (5)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#800" }],
      "selectors": [[".abcde"]]
    })

    const expect = {
      "block": [{ "border-color": "#800" }],
      "selectors": [[".abcde"], [".kh1w0f"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (6)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#800" }],
      "selectors": [[":root"]]
    })

    const expect = {
      "block": [{ "border-color": "#800" }],
      "selectors": [[".abcde"], [".kh1w0f"], [":root"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (7)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#080" }],
      "selectors": []
    })

    const expect = {
      "block": [{ "border-color": "#080" }],
      "selectors": []
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (8)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#080" }],
      "selectors": [[":root"]]
    })

    const expect = {
      "block": [{ "border-color": "#080" }],
      "selectors": [[":root"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (9)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#080" }],
      "selectors": [[".khw9jj"]]
    })

    const expect = {
      "block": [{ "border-color": "#080" }],
      "selectors": [[".khw9jj"], [":root"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (10)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#008" }],
      "selectors": [[".khw3f3"]]
    })

    const expect = {
      "block": [{ "border-color": "#008" }],
      "selectors": [[".khw3f3"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (11)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#008" }],
      "selectors": [[".khw3f3"]]
    })

    const expect = {
      "block": [{ "border-color": "#008" }],
      "selectors": [[".khw3f3"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (12)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#008" }],
      "selectors": [[".mnopqr"], [".abcdef"]]
    })

    const expect = {
      "block": [{ "border-color": "#008" }],
      "selectors": [[".abcdef"], [".khw3f3"], [".mnopqr"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (13)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#008" }],
      "selectors": [[":root"]]
    })

    const expect = {
      "block": [{ "border-color": "#008" }],
      "selectors": [[".abcdef"], [".khw3f3"], [".mnopqr"], [":root"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an existing style, add :root to the list of selectors (14)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#008" }],
      "selectors": [[":root"]]
    })

    const expect = {
      "block": [{ "border-color": "#008" }],
      "selectors": [[".abcdef"], [".khw3f3"], [".mnopqr"], [":root"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (15)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#008" }],
      "selectors": [[".khqadv", ":hover"]]
    })

    const expect = {
      "block": [{ "border-color": "#008" }],
      "selectors": [
        [".abcdef"],
        [".khqadv", ":hover"],
        [".khw3f3"],
        [".mnopqr"],
        [":root"]
      ]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (16)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#808" }],
      "selectors": [[".khku8r", ":hover"]]
    })

    const expect = {
      "block": [{ "border-color": "#808" }],
      "selectors": [[".khku8r", ":hover"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (17)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#808" }],
      "selectors": [["blockquote"]]
    })

    const expect = {
      "block": [{ "border-color": "#808" }],
      "selectors": [[".khku8r", ":hover"], ["blockquote"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (18)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#880" }],
      "selectors": [[".kh1pon"]]
    })

    const expect = {
      "block": [{ "border-color": "#880" }],
      "selectors": [[".kh1pon"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial(
  "given an object with valid property and value (19)",
  (t) => {
    const actual = cache({
      "block": [{ "border-color": "#880" }],
      "selectors": [[".khko4b", ":hover"]]
    })

    const expect = {
      "block": [{ "border-color": "#880" }],
      "selectors": [[".kh1pon"], [".khko4b", ":hover"]]
    }

    t.deepEqual(actual, expect)
  }
)

ava.serial("given an object with @supports", (t) => {
  const actual1 = cache({
    "block": [{ "float": "right" }],
    "conditional": {
      "media": ["minWidth:640px"],
      "supports": ["(display:inlineGrid)", "(color:hsl(100,10%,10%))"]
    },
    "property": "float",
    "selectors": [[".abcdef"]],
    "value": "right"
  })

  const actual2 = store
    .get("min-width:640px")
    .get(
      "@supports ((color:hsl(100,10%,10%)) and (display:inline-grid)){float:right}"
    )

  const expect = {
    "block": [{ "float": "right" }],
    "conditional": {
      "media": ["minWidth:640px"],
      "supports": ["(display:inlineGrid)", "(color:hsl(100,10%,10%))"]
    },
    "property": "float",
    "selectors": [[".abcdef"]],
    "value": "right"
  }

  t.deepEqual(actual1, expect)
  t.deepEqual(actual2, expect)
})
