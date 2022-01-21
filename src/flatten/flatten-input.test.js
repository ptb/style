import ava from "ava"

import { flattenInput, store } from "../index.js"

ava("given undefined arguments", (t) => {
  const actual = flattenInput()

  const expect = {}

  t.deepEqual(actual, expect)
})

ava("given an object", (t) => {
  const actual = flattenInput({
    "input": {
      "a": "b",
      "c": "d"
    }
  })

  const expect = {
    "a": "b",
    "c": "d"
  }

  t.deepEqual(actual, expect)
})

ava("given an array of objects", (t) => {
  const actual = flattenInput({
    "input": [
      {
        "e": "f"
      },
      {
        "g": "h"
      }
    ]
  })

  const expect = {
    "e": "f",
    "g": "h"
  }

  t.deepEqual(actual, expect)
})

ava("given an object with kebab-case keys", (t) => {
  const actual = flattenInput({
    "input": [
      {
        "i-j-k": "l"
      },
      {
        "i-j-k": "p",
        "m-n": "o"
      }
    ]
  })

  const expect = {
    "i-j-k": "p",
    "m-n": "o"
  }

  t.deepEqual(actual, expect)
})

ava("given an object with array value", (t) => {
  const actual = flattenInput({
    "input": {
      "backgroundColor": "#f00",
      "display": ["block", "flex", "grid"]
    }
  })

  const expect = {
    "backgroundColor": "#f00",
    "display": ["block", "flex", "grid"]
  }

  t.deepEqual(actual, expect)
})

ava("given a variable as argument (1)", (t) => {
  flattenInput({ "input": { "$unCite": { "fontWeight": 700 } } })

  const actual = flattenInput({
    "input": {
      "$unCite": true
    }
  })

  const expect = {
    "fontWeight": 700
  }

  t.deepEqual(actual, expect)
})

ava("given a variable as argument (2)", (t) => {
  flattenInput({ "input": { "$unCite": { "fontWeight": 600 } } })

  const actual = flattenInput({
    "input": {
      "$unCite": true,
      "fontSize": 12
    }
  })

  const expect = {
    "fontSize": 12,
    "fontWeight": 600
  }

  t.deepEqual(actual, expect)
})

ava("given a variable as argument (3)", (t) => {
  flattenInput({ "input": { "$unCite": { "fontWeight": 500 } } })

  const actual = flattenInput({
    "input": [
      {
        "$unCite": true
      },
      {
        "fontSize": 12,
        "fontWeight": 600
      }
    ]
  })

  const expect = {
    "fontSize": 12,
    "fontWeight": 600
  }

  t.deepEqual(actual, expect)
})

ava("given a variable as argument (4)", (t) => {
  flattenInput({
    "input": {
      "$format": {
        "display": ["flex", "inline-grid"]
      },
      "$unButton": {
        "borderColor": "#0ff",
        "borderWidth": 1
      }
    }
  })

  const actual = flattenInput({
    "input": {
      "$format": true,
      "$unButton": true
    }
  })

  const expect = {
    "borderColor": "#0ff",
    "borderWidth": 1,
    "display": ["flex", "inline-grid"]
  }

  t.deepEqual(actual, expect)
})

ava("given variable as argument (5)", (t) => {
  flattenInput({
    "input": {
      "$defaultFont": "Helvetica,Arial,sans-serif"
    }
  })

  const actual = store.get("").get("$defaultFont")

  const expect = {
    "conditional": { "media": undefined },
    "property": "$defaultFont",
    "value": "Helvetica,Arial,sans-serif"
  }

  t.deepEqual(actual, expect)
})

ava("given variable value as argument (1)", (t) => {
  const actual = flattenInput({
    "input": {
      "$defaultFont": "Helvetica,Arial,sans-serif",
      "fontFamily": "$defaultFont"
    }
  })

  const expect = {
    "fontFamily": "Helvetica,Arial,sans-serif"
  }

  t.deepEqual(actual, expect)
})

ava("given variable value as argument (2)", (t) => {
  const actual = flattenInput({
    "input": {
      "$defaultRotate": "180deg",
      "transform": "rotate($defaultRotate)"
    }
  })

  const expect = {
    "transform": "rotate(180deg)"
  }

  t.deepEqual(actual, expect)
})

ava("given property containing variable", (t) => {
  const actual = flattenInput({
    "input": {
      "$sm": "media (maxWidth:767.98px)",
      "@$sm": {
        "margin": 15,
        "p": 10
      }
    }
  })

  const expect = {
    "@media (maxWidth:767.98px)": {
      "margin": 15,
      "p": 10
    }
  }

  t.deepEqual(actual, expect)
})
