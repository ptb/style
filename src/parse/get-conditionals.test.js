import ava from "ava"

import { getConditionals, setVariable } from "../index.js"

ava.serial("given default media queries", (t) => {
  const actual = getConditionals()

  const expect = {
    "_": "",
    "Dk": "(prefersColorScheme:dark)",
    "L": "(orientation:landscape)",
    "Lt": "(prefersColorScheme:light)",
    "Md": "(minWidth:768px)",
    "P": "(orientation:portrait)",
    "Pr": "print",
    "Prm": "(prefersReducedMotion:reduce)",
    "Prt": "(prefersReducedTransparency:reduce)",
    "R": "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)",
    "Sc": "screen",
    "Sm": "(maxWidth:767.98px)"
  }

  t.deepEqual(actual, expect)
})

ava.serial("given extended media queries", (t) => {
  setVariable({
    "property": "$media",
    "value": {
      "Xs": "(maxWidth:639.98px)"
    }
  })

  const actual = getConditionals()

  const expect = {
    "_": "",
    "Dk": "(prefersColorScheme:dark)",
    "L": "(orientation:landscape)",
    "Lt": "(prefersColorScheme:light)",
    "Md": "(minWidth:768px)",
    "P": "(orientation:portrait)",
    "Pr": "print",
    "Prm": "(prefersReducedMotion:reduce)",
    "Prt": "(prefersReducedTransparency:reduce)",
    "R": "(WebkitMinDevicePixelRatio:2),(minResolution:192dpi)",
    "Sc": "screen",
    "Sm": "(maxWidth:767.98px)",
    "Xs": "(maxWidth:639.98px)"
  }

  t.deepEqual(actual, expect)
})

ava.serial("given empty $supports variable", (t) => {
  const actual = getConditionals("supports")

  const expect = {}

  t.deepEqual(actual, expect)
})

ava.serial("given defined $supports variable", (t) => {
  setVariable({
    "property": "$supports",
    "value": {
      "hasGrid": "(display:grid)"
    }
  })

  const actual = getConditionals("supports")

  const expect = {
    "hasGrid": "(display:grid)"
  }

  t.deepEqual(actual, expect)
})
