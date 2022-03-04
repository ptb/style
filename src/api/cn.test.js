import ava from "ava"

import { cn } from "../index.js"

ava("keeps object keys with truthy values", (t) => {
  const actual = cn({
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
  const actual = cn("a", 0, null, undefined, true, 1, "b")

  const expect = "a b"

  t.is(actual, expect)
})

ava("supports heterogenous arguments", (t) => {
  const actual = cn({ "a": true }, "b", 0)

  const expect = "a b"

  t.is(actual, expect)
})

ava("should be trimmed", (t) => {
  const actual = cn("", "b", {}, "")

  const expect = "b"

  t.is(actual, expect)
})

ava("returns an empty string for an empty configuration", (t) => {
  const actual = cn({})

  const expect = ""

  t.is(actual, expect)
})

ava("supports an array of class names", (t) => {
  const actual = cn(["a", "b"])

  const expect = "a b"

  t.is(actual, expect)
})

ava("joins array arguments with string arguments", (t) => {
  const actual1 = cn([["a", "b"], "c"])
  const actual2 = cn("c", ["a", "b"])

  const expect = "a b c"

  t.is(actual1, expect)
  t.is(actual2, expect)
})

ava("handles multiple array arguments", (t) => {
  const actual = cn(["d", "c"], ["a", "b"])

  const expect = "a b c d"

  t.is(actual, expect)
})

ava("handles arrays that include falsy and true values", (t) => {
  const actual = cn(["a", 0, null, undefined, false, true, "b"])

  const expect = "a b"

  t.is(actual, expect)
})

ava("handles arrays that include arrays", (t) => {
  const actual = cn(["a", ["b", "c"]])

  const expect = "a b c"

  t.is(actual, expect)
})

ava("handles arrays that include objects", (t) => {
  const actual = cn(["a", { "b": true, "c": false }])

  const expect = "a b"

  t.is(actual, expect)
})

ava("handles deep array recursion", (t) => {
  const actual = cn(["a", ["b", ["c", { "d": true }]]])

  const expect = "a b c d"

  t.is(actual, expect)
})

ava("handles arrays that are empty", (t) => {
  const actual = cn("a", [])

  const expect = "a"

  t.is(actual, expect)
})

ava("handles nested arrays that have empty nested arrays", (t) => {
  const actual = cn("a", [[]])

  const expect = "a"

  t.is(actual, expect)
})

ava(
  "handles all types of truthy and falsy property values as expected",
  (t) => {
    const actual = cn({
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
  const actual = cn({
    "toString": function () {
      return "classFromMethod"
    }
  })

  const expect = "classFromMethod"

  t.is(actual, expect)
})
