/*
  eslint-disable
    @typescript-eslint/no-unused-vars,
    import/order,
    max-lines-per-function,
    no-eval,
    no-unused-vars
 */

import {
  canUseDom,
  css,
  debounce,
  getStyles,
  sortJSON,
  store
} from "../../src/style.js"
import { classNames, style } from "./app.css.js"
import cssbeautify from "./cssbeautify.js"
import { Editor } from "./editor/index.js"
import { renderToStaticMarkup } from "./react-dom-server.js"

// @ts-ignore
import { createElement, h, useEffect, useState } from "./react.js"
import { Tabpanel, Tabs } from "./tabs/index.js"

/**
  @typedef {import ("react")} React
 */

/**
  `@ptb/style` demonstration component.

  Note: Even though both `createElement` and `h` are imported above
  they are both names for the same function: `React.createElement`.

  @param {object} props
  - Component inputs.

  @param {string} props.children
  - Initial content.

  @param {boolean} props.isDynamic
  - If `true`, then use dynamic `css` function.
  - If `false`, then use static class name strings.

  @returns {React.ReactElement}
    React component.
 */

export function App ({ children, isDynamic }) {
  /** @type {Record<string, string>} */
  const params = {}

  if (canUseDom() && window.location) {
    for (const [k, v] of new URLSearchParams(
      window.location.search
    )) {
      params[k] = v
    }
  }

  const [value, setValue] = useState(children)

  // eslint-disable-next-line no-use-before-define
  const [source, setSource] = useState(handleSource(children))

  /**
    Render the React component to static markup.

    @param {string} input
    - React component source.

    @returns {string}
      Rendered HTML string.
    */

  function handleSource (input) {
    try {
      return renderToStaticMarkup(eval(input))
    } catch (e) {
      /* eslint-disable-next-line no-use-before-define */
      return source
    }
  }

  useEffect(
    function () {
      if (children !== value) {
        setValue(children)
        setSource(handleSource(children))
      }
    },
    [children]
  )

  const [inside, setInside] = useState([])
  const [minify, setMinify] = useState("")
  const [styles, setStyles] = useState("")

  const handleUpdate = debounce(
    /**
    Update "source", "minify", and "styles" components.

    @returns {void}
    */

    function handleUpdate () {
      store.clear()
      setSource(handleSource(value))

      const result = getStyles()

      setMinify(result)
      setStyles(cssbeautify(result))
      setInside(
        JSON.stringify(
          sortJSON(
            [... store.values()].reduce(function (results, v) {
              return results.concat([... v.values()])
            }, [])
          ),
          null,
          2
        )
      )

      /* eslint-disable-next-line compat/compat */
      const url = new URL(window.location.href)

      url.searchParams.set("x", value)

      window.history.replaceState(null, "", url)
    },
    350
  )

  useEffect(handleUpdate, [value])

  /**
    Respond to keyboard events.

    @param {KeyboardEvent} e
    - An Event object.

    @returns {void}
    */

  function onInput (e) {
    setValue(/** @type {HTMLInputElement} */ (e.target).value || "")
  }

  return h(
    "div",
    {
      "className": isDynamic
        ? css(style.root, "line-numbers")
        : "du9fyy h4t9bs line-numbers or6fkv"
    },
    [
      h(
        "div",
        {
          "className": isDynamic ? css(style.main) : "orighe"
        },
        h(
          Editor,
          {
            "data-line": params.e,
            "id": "editor",
            isDynamic,
            onInput
          },
          value
        )
      ),
      h(
        Tabs,
        {
          classNames,
          isDynamic,
          "orientation": "horizontal",
          "styles": style,
          "tabs": ["Preview", "HTML", "Styles", "Minified", "Internal"]
        },
        [
          h(
            Tabpanel,
            {},
            h("div", {
              "dangerouslySetInnerHTML": {
                "__html": source
              }
            })
          ),
          h(
            Tabpanel,
            {},
            h(
              Editor,
              {
                "data-line": params.h,
                "id": "html",
                isDynamic,
                "lang": "html",
                "readOnly": true
              },
              source
            )
          ),
          h(
            Tabpanel,
            {},
            h(
              Editor,
              {
                "data-line": params.s,
                "id": "styles",
                isDynamic,
                "lang": "css",
                "readOnly": true
              },
              styles
            )
          ),
          h(
            Tabpanel,
            {},
            h(
              Editor,
              {
                "data-line": params.m,
                "id": "minify",
                isDynamic,
                "lang": "css",
                "readOnly": true
              },
              minify
            )
          ),
          h(
            Tabpanel,
            {},
            h(
              Editor,
              {
                "data-line": params.i,
                "id": "internal",
                isDynamic,
                "lang": "js",
                "readOnly": true
              },
              inside
            )
          )
        ]
      )
    ]
  )
}
