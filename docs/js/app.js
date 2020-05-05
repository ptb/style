/* eslint-disable sort-keys */

import {
  createElement as h,
  useEffect,
  useState
} from "./react.js"
import {
  canUseDom,
  css,
  getStyleElement,
  getStyles,
  parse,
  store
} from "../../src/api/index.js"

import cssbeautify from "./cssbeautify.js"
import { isJSON } from "./is-json.js"
import { sortJSON } from "./sort-json.js"

export const App = () => {
  const [cnames, setCnames] = useState ("")
  const [input, setInput] = useState ("{\n  \n}\n")
  const [inside, setInside] = useState ("[]")
  const [minify, setMinify] = useState ("")
  const [styles, setStyles] = useState ("")

  useEffect (() => {
    if (isJSON (input)) {
      store.clear ()
      setCnames (css (JSON.parse (input)))
      setInside (sortJSON (parse ({ "input": JSON.parse (input) })))
      setMinify (getStyles ())
      setStyles (cssbeautify (getStyles ()))
    }

    setTimeout (() =>
      /* eslint-disable-next-line no-undef */
      window.Prism.highlightAll (), 0)
  }, [input])

  if (canUseDom) {
    window.getStyleElement = getStyleElement
    window.getStyles = getStyles
  }

  const examples = {
    "Simple Example": {
      "display": "flex",
      "flexDirection": "row"
    },
    "Media Query": {
      "@media (min-width: 768px)": {
        "backgroundColor": "#0f0",
        "color": "#f00"
      }
    },
    "Fallback Example": {
      "backgroundColor": "#0ff",
      "display": [
        "block",
        "flex",
        "grid"
      ]
    },
    "Pseudo-Classes": {
      ":active": {
        "backgroundColor": "#0f0"
      },
      ":hover": {
        "color": "#f00"
      }
    },
    "Keyframe Animations": {
      "animationName": {
        "from": {
          "marginLeft": "150px"
        },
        "to": {
          "marginLeft": 0
        }
      }
    },
    "Deep Merge Objects": [
      {
        ":hover": {
          "backgroundColor": "#f00"
        },
        "color": "red"
      },
      {
        ":hover": {
          "backgroundColor": "#0ff"
        },
        "display": "flex"
      }
    ],
    "Placeholder Class": {
      "%figure": true,
      "%figure:visited": {
        "cursor": "pointer"
      }
    },
    "Combinators": {
      "%panel": true,
      "%panel:hover > #address": {
        "backgroundColor": "#0f0",
        "color": "#f00"
      },
      "color": "#f00"
    },
    "Complex Font Fallbacks": {
      "fontFamily": [
        {
          "fontFamily": "Avenir",
          "src": "url('/fonts/avenir.woff') format('woff')"
        },
        "Helvetica",
        "Arial",
        {
          "src": "url('/fonts/font-2.woff') format('woff')"
        }
      ]
    },
    "Complex Media Queries": {
      "@media (min-width: 768px)": {
        "@media screen": {
          "backgroundColor": [
            "rgba(0, 0, 0, 0.9)",
            "#111"
          ]
        },
        "color": "#f00",
        "fontFamily": "sans-serif"
      }
    },
    "Stupidly Complex Selectors": {
      "#root %stuff": {
        "#products::after,%figure > &,#body~&+[aria-expanded=true]": {
          "background-color": "#f0f",
          "display": "grid"
        }
      }
    }
  }

  return h (
    "div",
    {
      "className": css ({
        "fontSize": "1em",
        "maxWidth": "27em"
      })
    },
    Object.keys (examples).map ((key) =>
      h ("button", {
        "onClick": () =>
          setInput (sortJSON (examples[key]))
      }, key)),
    h ("details", { "open": true },
      h ("summary", {}, h ("h3", {}, "Editor"),),
      h ("textarea", {
        "cols": 38,
        "onChange": ({ "target": { value } }) =>
          (isJSON (value)
            ? setInput (sortJSON (JSON.parse (value)))
            : setInput (value)),
        "rows": 10,
        "value": input
      })),

    h ("details", { "open": true },
      h ("summary", {}, h ("h3", {}, "Classes")),
      h ("pre", {}, h ("code", { "className": "language-css" }, cnames))),

    h ("details", { "open": true },
      h ("summary", {}, h ("h3", {}, "Styles")),
      h ("pre", {}, h ("code", { "className": "language-css" }, styles))),

    h ("details", {},
      h ("summary", {}, h ("h3", {}, "Minified")),
      h ("pre", {}, h ("code", { "className": "language-css" }, minify))),

    h ("details", {},
      h ("summary", {}, h ("h3", {}, "Internal")),
      h ("pre", {}, h ("code", { "className": "language-json" }, inside)))
  )
}

export default App
