import ava from "ava"

import { sortJSON } from "../index.js"

ava("given undefined argument", (t) => {
  const actual = sortJSON(undefined)

  const expect = undefined

  t.is(actual, expect)
})

ava("given an array", (t) => {
  const actual = sortJSON(["z", "y", "x"])

  const expect = ["z", "y", "x"]

  t.deepEqual(actual, expect)
})

ava("given an object 1", (t) => {
  /* eslint-disable-next-line sort-keys */
  const input = { "z": 1, "y": 2, "x": 3 }

  const actual = JSON.stringify(sortJSON(input))

  const expect = JSON.stringify({ "x": 3, "y": 2, "z": 1 })

  t.not(JSON.stringify(input), actual)
  t.not(JSON.stringify(input), expect)
  t.is(actual, expect)
})

ava("given an object 2", (t) => {
  /* eslint-disable-next-line sort-keys */
  const input = { "z": 1, "y": 2, "x": 3, "w": { "z": "y", "x": "w" } }

  const actual = JSON.stringify(sortJSON(input))

  const expect = JSON.stringify({
    "w": { "x": "w", "z": "y" },
    "x": 3,
    "y": 2,
    "z": 1
  })

  t.not(JSON.stringify(input), actual)
  t.not(JSON.stringify(input), expect)
  t.is(actual, expect)
})
