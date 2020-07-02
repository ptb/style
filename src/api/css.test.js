import ava from "ava"
import { store } from "../store/store.js"
import { css } from "./css.js"

function strMapToObj (strMap) {
  const obj = Object.create (null)

  for (const [k, v] of strMap) {
    obj[k] = v
  }

  return obj
}

ava ("given undefined arguments", (t) => {
  const actual = css ()
  const expect = ""

  t.deepEqual (actual, expect)
})

ava ("given an object with simple declarations", (t) => {
  const actual1 = css ({
    "backgroundColor": "#f00",
    "display": "block"
  })

  const expect1 = "dqztx9 jsx2a9"

  const actual2 = strMapToObj (store.get (""))

  const expect2 = {
    '[{"background-color":"#f00"}]': {
      "block": [
        {
          "background-color": "#f00"
        }
      ],
      "emit": true,
      "identifier": "jsx2a9",
      "input": {
        "backgroundColor": "#f00"
      },
      "insertRule": true,
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".jsx2a9"]],
      "value": "#f00"
    },
    '[{"display":"block"}]': {
      "block": [
        {
          "display": "block"
        }
      ],
      "emit": true,
      "identifier": "dqztx9",
      "input": {
        "display": "block"
      },
      "insertRule": true,
      "media": "",
      "property": "display",
      "selectors": [[".dqztx9"]],
      "value": "block"
    }
  }

  t.is (actual1, expect1)
  t.deepEqual (actual2, expect2)
})

ava ("given an array of objects with simple declarations", (t) => {
  const actual = css ([
    {
      "backgroundColor": "#f00",
      "display": "block"
    },
    {
      "backgroundColor": "#0f0"
    }
  ])

  const expect = "dqztx9 jsxz4h"

  t.is (actual, expect)
})

ava ("given an object with simple declarations and class name strings", (t) => {
  const actual = css ({
    "backgroundColor": "#0f0"
  }, "button large")

  const expect = "button large jsxz4h"

  t.is (actual, expect)
})

ava ("given an object with simple declarations and array of class name strings", (t) => {
  const actual = css ({
    "backgroundColor": "#0f0"
  }, ["button", "large"])

  const expect = "button large jsxz4h"

  t.is (actual, expect)
})
