/*
  eslint-disable
    max-lines-per-function,
    no-console,
    react/prop-types
 */

import { isFn } from "../index.js"
import classNames from "./editor.css.js"
import { useEffect, useRef, useState } from "./jsx-runtime"
import { Prism } from "./prism.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  Editable syntax-highlighted `<textarea>` React component.

  @param {object} props
  - Component inputs.

  @param {string} [props.children]
  - Initial content.

  @param {string} [props.id]
  - String defining an identifier which must be unique in the whole document.

  @param {string} [props.lang]
  - Programming language.

  @param {React.FormEventHandler<HTMLTextAreaElement>} [props.onInput]
  - `onInput` function prop.

  @param {boolean} [props.readOnly]
  - Indicates the value of the `<textarea>` cannot be modified.

  @param {number} [props.rows]
  - The number of rows to display by default.

  @returns {React.ReactElement}
    Editable syntax-highlighted `<textarea>` React component.
 */

export function Editor ({
  children = "",
  id,
  lang = "js",
  onInput,
  readOnly = false,
  rows = 3,
  ... props
}) {
  /** @type {React.RefObject<HTMLElement>} */
  const codeRef = useRef(null)

  /** @type {React.RefObject<HTMLTextAreaElement>} */
  const textRef = useRef(null)

  /** @type {React.RefObject<HTMLPreElement>} */
  const wrapRef = useRef(null)

  const [value, setValue] = useState(children)

  /**
    Update `<code>` syntax highlighting.

    @returns {void}
   */

  function handleUpdate () {
    Prism.highlightElement(codeRef.current)
  }

  /**
    Update `<code>` element with `<textarea>` content on input events.

    @param {React.ChangeEvent<HTMLTextAreaElement>} e
    - An Event object.

    @returns {void}
   */

  function handleInput (e) {
    setValue(e.target.value || "")

    if (isFn(onInput)) {
      onInput(e)
    }
  }

  /**
    Update the `pre` element scroll position as `textarea` is scrolled.
    Necessary only if `"white-space": "pre"` is set.

    @returns {void}
   */

  function handleScroll () {
    if (wrapRef.current && textRef.current) {
      wrapRef.current.scrollTop = textRef.current.scrollTop
      wrapRef.current.scrollLeft = textRef.current.scrollLeft
    }
  }

  useEffect(
    function () {
      if (children !== value) {
        setValue(children)
      }
    },
    [children, value]
  )

  useEffect(handleUpdate, [value])

  useEffect(
    function () {
      if (wrapRef && wrapRef.current) {
        new ResizeObserver(function (entries) {
          for (const entry of entries) {
            // @ts-ignore
            Prism.plugins.lineNumbers.resize(entry.target)

            // @ts-ignore
            Prism.plugins.lineHighlight.highlightLines(entry.target)()
          }
        }).observe(wrapRef.current)
      }
    },
    [wrapRef]
  )

  return (
    <div className={classNames.div}>
      <pre
        aria-hidden
        className={[
          classNames.pre,
          `language-${lang}`,
          "line-numbers"
        ].join(" ")}
        id={id}
        ref={wrapRef}
        {...props}
      >
        <code className={classNames.code} ref={codeRef}>
          {value + (value[value.length - 1] === "\n" ? " " : "")}
        </code>
      </pre>
      <textarea
        className={classNames.textarea}
        onInput={handleInput}
        onScroll={handleScroll}
        readOnly={readOnly}
        ref={textRef}
        rows={rows}
        spellCheck={false}
        value={value}
      />
    </div>
  )
}
