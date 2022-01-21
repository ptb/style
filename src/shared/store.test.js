import ava from "ava"

import { store } from "../index.js"

ava.serial("when 'store' module' is imported", (t) => {
  const actual = store instanceof Map

  t.true(actual)
})

ava.serial("given 'true' is set for the 'one' key", (t) => {
  store.set("one", true)

  const actual = store.get("one")

  t.true(actual)
})

ava.serial("given 'false' is set for the 'two' key", (t) => {
  store.set("two", false)

  const actual = store.get("two")

  t.false(actual)
})

ava.serial("given 'true' is get for the 'one' key", (t) => {
  const actual = store.get("one")

  t.true(actual)
})
