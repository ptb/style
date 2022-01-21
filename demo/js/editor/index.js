/* eslint-disable max-lines-per-function */

import { css, isFn } from "../../../src/style.js"
import { Prism } from "../prism.js"
import {
  createElement as h,
  useEffect,
  useRef,
  useState
} from "../react.js"
import { style } from "./style.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  Editable syntax-highlighted `<textarea>` React component.

  @param {object} props
  - Component inputs.

  @param {string} [props.children]
  - Initial content.

  @param {string} [props.className]
  - Extra string value to append to the class attribute.

  @param {boolean} [props.isDynamic]
  - If `true`, then use dynamic `css` function.
  - If `false`, then use static class name strings.

  @param {string} [props.lang]
  - Programming language.

  @param {React.FormEventHandler<HTMLTextAreaElement>} [props.onInput]
  - `onInput` function prop.

  @param {boolean} [props.readOnly]
  - Indicates the value of the `<textarea>` cannot be modified.

  @param {number} [props.rows]
  - The number of rows to display by default.

  @param {object} [props.styles]
  - Plain JavaScript object or array of objects containing CSS styles.

  @returns {React.ReactNode}
    Editable syntax-highlighted `<textarea>` React component.
 */

export function Editor ({
  children = "",
  className,
  isDynamic,
  lang = "js",
  onInput,
  readOnly = false,
  rows = 3,
  styles = {},
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
    [children]
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

  return h(
    "div",
    { "className": isDynamic ? css([style.div, styles]) : "orqosx" },
    [
      h(
        "pre",
        {
          "aria-hidden": true,
          "className": isDynamic
            ? css(
              [style.common, style.pre],
              [`language-${lang}`, "line-numbers"]
            )
            : [
              `language-${lang}`,
              "line-numbers",
              "or9a36",
              className
            ]
              .filter(Boolean)
              .join(" "),
          "ref": wrapRef,
          ... props
        },
        h(
          "code",
          {
            "className": isDynamic ? css(style.common) : "orjljs",
            "ref": codeRef
          },
          value + (value[value.length - 1] === "\n" ? " " : "")
        )
      ),
      h("textarea", {
        "className": isDynamic
          ? css([style.common, style.textarea])
          : "or2bxt orsznx",
        "onInput": handleInput,
        "onScroll": handleScroll,
        "readOnly": readOnly,
        "ref": textRef,
        rows,
        "spellCheck": false,
        "value": value
      })
    ]
  )
}
