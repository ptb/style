import ava from "ava"

import { css, store } from "../index.js"

/**
  Converts a JavaScript map to an plain object.

  @typedef {import ("..").PlainObject} PlainObject

  @param {Map<string, PlainObject>} strMap
  - A JavaScript Map.

  @returns {PlainObject}
    Returns a plain JavaScript object.
 */

function strMapToObj (strMap) {
  const obj = Object.create(null)

  for (const [k, v] of strMap) {
    obj[k] = v
  }

  return obj
}

ava("given undefined arguments", (t) => {
  const actual = css()
  const expect = ""

  t.deepEqual(actual, expect)
})

ava("given only className arguments", (t) => {
  const actual = css({}, ["button", "args ios"])

  const expect = "args button ios"

  t.is(actual, expect)
})

ava("given an object with simple declarations", (t) => {
  store.clear()

  const actual1 = css({
    "backgroundColor": "#f00",
    "display": "block"
  })

  const expect1 = "du07kg kclzxd"

  const actual2 = strMapToObj(store.get(""))

  const expect2 = {
    "background-color:#f00": {
      "block": [
        {
          "background-color": "#f00"
        }
      ],
      "conditional": {},
      "emit": true,
      "identifier": "kclzxd",
      "property": "backgroundColor",
      "selectors": [[".kclzxd"]],
      "value": "#f00"
    },
    "display:block": {
      "block": [
        {
          "display": "block"
        }
      ],
      "conditional": {},
      "emit": true,
      "identifier": "du07kg",
      "property": "display",
      "selectors": [[".du07kg"]],
      "value": "block"
    }
  }

  t.is(actual1, expect1)
  t.deepEqual(actual2, expect2)
})

ava("given an array of objects with simple declarations", (t) => {
  const actual = css([
    {
      "backgroundColor": "#f00",
      "display": "block"
    },
    {
      "backgroundColor": "#0f0"
    }
  ])

  const expect = "du07kg kcbfig"

  t.is(actual, expect)
})

ava(
  "given an object with simple declarations and class name strings",
  (t) => {
    const actual = css(
      {
        "backgroundColor": "#0f0"
      },
      "button large"
    )

    const expect = "button kcbfig large"

    t.is(actual, expect)
  }
)

ava(
  "given an object with simple declarations and array of class name strings",
  (t) => {
    const actual = css(
      {
        "backgroundColor": "#0f0"
      },

      // @ts-ignore
      ["button", ["large", "green"]]
    )

    const expect = "button green kcbfig large"

    t.is(actual, expect)
  }
)

ava(
  "given an object with simple declarations and array with invalid values",
  (t) => {
    const actual = css(
      {
        "backgroundColor": "#0f0"
      },

      // @ts-ignore
      ["button", 1, ["large", "green"]]
    )

    const expect = "button green kcbfig large"

    t.is(actual, expect)
  }
)
