import { debounce, sortJSON } from "../index.js"
import { cssToJs } from "./css-to-js"
import { Editor } from "./editor.jsx"
import { StrictMode, useEffect, useState } from "./jsx-runtime"
import { hydrate } from "./react-dom.js"

/**
  @typedef {import ("@ptb/style").StylesObject} StylesObject

  @typedef {typeof import ("react")} React
 */

/**
  @param {object} props

  @param {string} [props.children]
  - Initial content.

  @returns {React.ReactElement}
    React component.
 */

export function Convert ({ children }) {
  const [input, setInput] = useState(children)
  const [output, setOutput] = useState("")

  /**
    Parse CSS stylesheet and convert to an equivalent JavaScript object.

    @param {string} value
    - String containing a CSS stylesheet or rulesets.

    @returns {StylesObject}
      Plain JavaScript object containing CSS styles.
   */

  function handleSource (value) {
    try {
      return cssToJs(value)
    } catch (e) {
      return output
    }
  }

  useEffect(
    function () {
      if (children !== input) {
        setInput(children)
        setOutput(handleSource(children))
      }
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [children]
  )

  const handleUpdate = debounce(
    /**
      Update "output" components.

      @returns {void}
     */

    function handleUpdate () {
      setOutput(JSON.stringify(sortJSON(handleSource(input)), null, 2))
    },
    350
  )

  useEffect(
    function () {
      handleUpdate()
    },
    [handleUpdate, input]
  )

  /**
    Respond to keyboard events.

    @param {React.ChangeEvent<HTMLTextAreaElement>} e
    - An Event object.

    @returns {void}
   */

  function onInput (e) {
    setInput(
      /** @type {HTMLTextAreaElement} */ (e.target).value || ""
    )
  }

  return (
    <>
      <Editor onInput={onInput}>{input}</Editor>
      <Editor>{output}</Editor>
    </>
  )
}

hydrate(
  <StrictMode>
    <Convert />
  </StrictMode>,
  document.getElementById("root")
)
