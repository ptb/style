import ava from "ava"

import { cx } from "../index.js"

ava("keeps object keys with truthy values", (t) => {
  const actual = cx({
    "a": true,
    "b": false,
    "c": 0,
    "d": null,
    "e": undefined,
    "f": 1
  })

  const expect = "a f"

  t.is(actual, expect)
})

ava("joins arrays of class names and ignore falsy values", (t) => {
  const actual = cx("a", 0, null, undefined, true, 1, "b")

  const expect = "a b"

  t.is(actual, expect)
})

ava("supports heterogenous arguments", (t) => {
  const actual = cx({ "a": true }, "b", 0)

  const expect = "a b"

  t.is(actual, expect)
})

ava("should be trimmed", (t) => {
  const actual = cx("", "b", {}, "")

  const expect = "b"

  t.is(actual, expect)
})

ava("returns an empty string for an empty configuration", (t) => {
  const actual = cx({})

  const expect = ""

  t.is(actual, expect)
})

ava("supports an array of class names", (t) => {
  const actual = cx(["a", "b"])

  const expect = "a b"

  t.is(actual, expect)
})

ava("joins array arguments with string arguments", (t) => {
  const actual1 = cx([["a", "b"], "c"])
  const actual2 = cx("c", ["a", "b"])

  const expect = "a b c"

  t.is(actual1, expect)
  t.is(actual2, expect)
})

ava("handles multiple array arguments", (t) => {
  const actual = cx(["d", "c"], ["a", "b"])

  const expect = "a b c d"

  t.is(actual, expect)
})

ava("handles arrays that include falsy and true values", (t) => {
  const actual = cx(["a", 0, null, undefined, false, true, "b"])

  const expect = "a b"

  t.is(actual, expect)
})

ava("handles arrays that include arrays", (t) => {
  const actual = cx(["a", ["b", "c"]])

  const expect = "a b c"

  t.is(actual, expect)
})

ava("handles arrays that include objects", (t) => {
  const actual = cx(["a", { "b": true, "c": false }])

  const expect = "a b"

  t.is(actual, expect)
})

ava("handles deep array recursion", (t) => {
  const actual = cx(["a", ["b", ["c", { "d": true }]]])

  const expect = "a b c d"

  t.is(actual, expect)
})

ava("handles arrays that are empty", (t) => {
  const actual = cx("a", [])

  const expect = "a"

  t.is(actual, expect)
})

ava("handles nested arrays that have empty nested arrays", (t) => {
  const actual = cx("a", [[]])

  const expect = "a"

  t.is(actual, expect)
})

ava(
  "handles all types of truthy and falsy property values as expected",
  (t) => {
    const actual = cx({
      "emptyList": [],
      "emptyObject": {},
      "emptyString": "",
      "false": false,
      "function": Object.prototype.toString,
      "greaterZero": 1,
      "negativeZero": -0,
      "nonEmptyList": [1, 2, 3],
      "nonEmptyObject": { "a": 1, "b": 2 },
      "nonEmptyString": "foobar",
      "noNumber": NaN,
      "null": null,
      "undefined": undefined,
      "whitespace": " ",
      "zero": 0
    })

    const expect =
      "emptyList emptyObject function greaterZero nonEmptyList nonEmptyObject nonEmptyString whitespace"

    t.is(actual, expect)
  }
)

ava("handles toString() method defined on object", (t) => {
  const actual = cx({
    "toString": function () {
      return "classFromMethod"
    }
  })

  const expect = "classFromMethod"

  t.is(actual, expect)
})
