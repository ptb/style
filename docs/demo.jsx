/*
  eslint-disable
    max-lines-per-function,
    no-eval,
    react/prop-types
 */

import {
  canUseDom,
  css,
  debounce,
  getStyles,
  isStr,
  sortJSON,
  store
} from "../index.js"
import cssbeautify from "./cssbeautify.js"
import classNames from "./demo.css.js"
import { Editor } from "./editor.jsx"
import { jsx, Fragment, StrictMode, useEffect, useState } from "./jsx-runtime"
import { renderToStaticMarkup } from "./react-dom-server.js"
import { hydrate } from "./react-dom.js"
import { TabItem } from "./tab-item.jsx"
import {
  Tablist,
  Tabpanel,
  Tabpanels,
  useTabs
} from "./tabs.jsx"
import useParam from "./use-param.js"
import { useVisualViewport } from "./use-visual-viewport.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `@ptb/style` demonstration component.

  @param {object} props
  - Component inputs.

  @param {string} props.children
  - Initial content.

  @returns {React.ReactElement}
    React component.
 */

export function Demo ({ children }) {
  // @ts-ignore
  window.createElement = jsx

  // @ts-ignore
  window.css = css

  // @ts-ignore
  window.Fragment = Fragment

  /** @type {Record<string, string>} */
  const params = {}

  if (canUseDom() && window.location) {
    for (const [k, v] of new URLSearchParams(
      window.location.search
    )) {
      params[k] = v
    }
  }

  const setSearch = useParam("x", true)[1]

  const [value, setValue] = useState(children)

  /* eslint-disable-next-line no-use-before-define */
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
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [children]
  )

  const [inside, setInside] = useState("")
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

      setSearch(value)
    },
    350
  )

  useEffect(
    function () {
      handleUpdate()
    },
    [handleUpdate, value]
  )

  /**
    Respond to keyboard events.

    @param {React.ChangeEvent<HTMLTextAreaElement>} e
    - An Event object.

    @returns {void}
   */

  function onInput (e) {
    setValue(
      /** @type {HTMLTextAreaElement} */ (e.target).value || ""
    )
  }

  const tabs = {
    "Input": ["Editor"],
    "Output": ["Preview", "HTML", "Styles", "Minified", "Internal"]
  }

  const { labels, param, selected, setParam, setSelected } = useTabs({
    "group": "t",
    tabs
  })

  useVisualViewport()

  return (
    <div className={classNames.grid}>
      <Tablist
        classNames={classNames}
        group="t"
        initial={param}
        menuitem={TabItem}
        orientation="horizontal"
        selected={selected}
        setSelected={setSelected}
        tabs={tabs}
        total={labels.length}
        updParams={setParam}
      />
      <Tabpanels
        classNames={classNames}
        group="t"
        labels={labels}
        selected={selected}
      >
        <Tabpanel>
          <Editor data-line={params.e} id="editor" onInput={onInput}>
            {value}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <div dangerouslySetInnerHTML={{ "__html": source }} />
        </Tabpanel>
        <Tabpanel>
          <Editor data-line={params.h} id="html" lang="html" readOnly>
            {source}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <Editor
            data-line={params.s}
            id="styles"
            lang="css"
            readOnly
          >
            {styles}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <Editor
            data-line={params.m}
            id="minify"
            lang="css"
            readOnly
          >
            {minify}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <Editor
            data-line={params.i}
            id="internal"
            lang="js"
            readOnly
          >
            {inside}
          </Editor>
        </Tabpanel>
      </Tabpanels>
    </div>
  )
}

/** @type {string | null} */
let content = [
  `createElement(\n  "span",\n  {\n    className: css({\n      `,
  `\n    })\n  },\n  "Buy Now!"\n)`
].join("")

if (canUseDom() && window.location.search) {
  const params = new URLSearchParams(window.location.search)
  const x = params.get("x")

  if (params.has("x") && isStr(x)) {
    try {
      content = x
    } catch (e) {
      console.error(e)
    }
  }
}

hydrate(
  <StrictMode>
    <Demo>
      {content}
    </Demo>
  </StrictMode>,
  document.getElementById("root")
)
