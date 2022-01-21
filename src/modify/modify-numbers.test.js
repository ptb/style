import ava from "ava"

import { defaultParams, modifyNumbers } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = modifyNumbers()

  const expect = [defaultParams]

  t.deepEqual(actual, expect)
})

ava(
  "given an object with 'margin' property and integer value (1)",
  (t) => {
    const actual = modifyNumbers({
      "property": "margin",
      "value": 10
    })

    const expect = [
      {
        "property": "margin",
        "value": "10px"
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with 'margin' property and integer value (2)",
  (t) => {
    const actual = modifyNumbers({
      "property": "margin",
      "value": 0
    })

    const expect = [
      {
        "property": "margin",
        "value": 0
      }
    ]

    t.deepEqual(actual, expect)
  }
)

ava(
  "given an object with 'order' property and integer values",
  (t) => {
    const actual = modifyNumbers({
      "property": "order",
      "value": 10
    })

    const expect = [
      {
        "property": "order",
        "value": 10
      }
    ]

    t.deepEqual(actual, expect)
  }
)
