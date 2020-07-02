import ava from "ava"
import { getPropertyId } from "./get-property-id.js"

ava ("given undefined arguments", (t) => {
  const actual = getPropertyId ()
  const expect = 374

  t.is (actual, expect)
})

ava ("given an empty string", (t) => {
  const actual = getPropertyId ("")
  const expect = 374

  t.is (actual, expect)
})

ava ("given a string with an invalid property name", (t) => {
  const actual = getPropertyId ("xyz")
  const expect = 374

  t.is (actual, expect)
})

ava ("given a string with a valid CSS variable name", (t) => {
  const actual = getPropertyId ("--background-color")
  const expect = 375

  t.is (actual, expect)
})

ava ("given a string with a valid property name (1)", (t) => {
  const actual = getPropertyId ("background")
  const expect = 711

  t.is (actual, expect)
})

ava ("given a string with a valid property name (2)", (t) => {
  const actual = getPropertyId ("background-color")
  const expect = 712

  t.is (actual, expect)
})

ava ("given a string with a valid property name (3)", (t) => {
  const actual = getPropertyId ("scrollBehavior")
  const expect = 838

  t.is (actual, expect)
})

ava ("given a string with a prefixed property name (1)", (t) => {
  const actual = getPropertyId ("-webkit-appearance")
  const expect = 483

  t.is (actual, expect)
})

ava ("given a string with a prefixed property name (2)", (t) => {
  const actual = getPropertyId ("MozUserSelect")
  const expect = 482

  t.is (actual, expect)
})

ava ("given a string with a valid placeholder class name", (t) => {
  const actual = getPropertyId ("%productList")
  const expect = 839

  t.is (actual, expect)
})
