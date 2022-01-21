import ava from "ava"

import { murmurHash } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = murmurHash().slice(-4)

  const expect = "phmt"

  t.is(actual, expect)
})

ava("given an empty string", (t) => {
  const actual = murmurHash("").slice(-4)

  const expect = "phmt"

  t.is(actual, expect)
})

ava("given a 1 character string", (t) => {
  const actual = murmurHash("a").slice(-4)

  const expect = "41oe"

  t.is(actual, expect)
})

ava("given a 2 character string", (t) => {
  const actual = murmurHash("ab").slice(-4)

  const expect = "55vs"

  t.is(actual, expect)
})

ava("given a 3 character string", (t) => {
  const actual = murmurHash("abc").slice(-4)

  const expect = "ljus"

  t.is(actual, expect)
})

ava("given a 4 character string", (t) => {
  const actual = murmurHash("abcd").slice(-4)

  const expect = "yzri"

  t.is(actual, expect)
})

ava("given a 5 character string", (t) => {
  const actual = murmurHash("abcde").slice(-4)

  const expect = "8j3m"

  t.is(actual, expect)
})

ava("given a 6 character string", (t) => {
  const actual = murmurHash("abcdef").slice(-4)

  const expect = "dfuc"

  t.is(actual, expect)
})

ava("given a 7 character string", (t) => {
  const actual = murmurHash("abcdefg").slice(-4)

  const expect = "k27l"

  t.is(actual, expect)
})
