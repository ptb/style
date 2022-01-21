import ava from "ava"

import { replaceVariables, setVariable, store } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = replaceVariables(undefined)

  const expect = undefined

  t.is(actual, expect)
})

ava.serial("given variable string with unstored value", (t) => {
  const actual = replaceVariables("$unavailable")

  const expect = "$unavailable"

  t.is(actual, expect)
})

ava.serial("given variable string with stored value (1)", (t) => {
  setVariable({
    "property": "$unCite",
    "value": { "fontStyle": "inherit" }
  })

  const actual = replaceVariables("$unCite")

  const expect = { "fontStyle": "inherit" }

  t.deepEqual(actual, expect)
})

ava.serial("given variable string with stored value (2)", (t) => {
  setVariable({
    "property": "$display",
    "value": ["inline-block", "flex"]
  })

  const actual = replaceVariables("$display")

  const expect = ["inline-block", "flex"]

  t.deepEqual(actual, expect)
})

ava.serial("given variable string with stored value (3)", (t) => {
  setVariable({ "property": "$red", "value": "#f00" })

  const actual = replaceVariables("$red")

  const expect = "#f00"

  t.is(actual, expect)
})

ava.serial("given variable string with stored value (4)", (t) => {
  setVariable({ "property": "$blue", "value": "#00f" })

  const actual = replaceVariables("$red $blue")

  const expect = "#f00 #00f"

  t.is(actual, expect)
})

ava.serial("given variable string with stored value (5)", (t) => {
  setVariable({
    "conditional": { "media": ["(minWidth: 768px)"] },
    "property": "$blue",
    "value": "rgb(0, 0, 255)"
  })

  const actual = replaceVariables("$red $blue", "(min-width:768px)")

  const expect = "$red rgb(0, 0, 255)"

  t.is(actual, expect)
})

ava.serial("given a $media variable", (t) => {
  setVariable({
    "property": "$media",
    "value": {
      "_": "",
      "md": "(minWidth:768px)",
      "sm": "(minWidth:640px)",
      "xs": "(maxWidth:639.98px)"
    }
  })

  const actual = replaceVariables("$media.sm")

  const expect = "(minWidth:640px)"

  t.is(actual, expect)
})

ava.serial("given a $theme variable 1", (t) => {
  setVariable({
    "property": "$theme",
    "value": {
      "colors": {
        "blue": {
          "light": "hsl(195,50%,80%)"
        },
        "red": "#f00"
      }
    }
  })

  const actual = replaceVariables("$theme.colors.blue.light")

  const expect = "hsl(195,50%,80%)"

  t.is(actual, expect)

  t.deepEqual(replaceVariables("$theme.colors.blue"), {
    "light": "hsl(195,50%,80%)"
  })
})

ava.serial("given a $theme variable 2", (t) => {
  const actual = replaceVariables("$theme.colors.blue.dark")

  const expect = undefined

  t.deepEqual(actual, expect)
})

ava.serial("given a non-variable 1", (t) => {
  const expect = "$thing"

  const actual = replaceVariables(expect)

  t.is(actual, expect)
})

ava.serial("given a non-variable 2", (t) => {
  const expect = "theme.colors.blue.light"

  const actual = replaceVariables(expect)

  t.is(actual, expect)
})

ava.serial("given a variable with string value", (t) => {
  const actual = replaceVariables("$thing.stuff")

  const expect = "$thing.stuff"

  t.is(actual, expect)
})

ava.serial("given an existing variable key", (t) => {
  setVariable({
    "property": "$colors",
    "value": {
      "primaryBlue": "#00f"
    }
  })

  const actual1 = store.get("").get("$colors").value

  setVariable({
    "property": "$colors",
    "value": {
      "primaryGreen": "#0f0"
    }
  })

  const actual2 = store.get("").get("$colors").value

  const actual3 = replaceVariables("$colors.primaryBlue")

  const expect1 = {
    "primaryBlue": "#00f"
  }

  const expect2 = {
    "primaryBlue": "#00f",
    "primaryGreen": "#0f0"
  }

  const expect3 = "#00f"

  t.deepEqual(actual1, expect1)
  t.deepEqual(actual2, expect2)
  t.is(actual3, expect3)
})
