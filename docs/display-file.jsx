/*
  eslint-disable
    react/prop-types
 */

import { debounce } from "../index.js"
import classNames from "./editor.css.js"
import { useEffect, useRef } from "./jsx-runtime"
import { Prism } from "./prism.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  @param {object} props

  @param {string} [props.children]

  @param {string} [props.lang]

  @param {string} [props.src]

  @param {object} [props.style]

  @returns {React.ReactElement}
 */

export function DisplayFile ({ lang = "js", src, style = {}, ... props }) {
  const ref = useRef(null)

  const onScroll =
    /** @type {React.UIEventHandler<HTMLPreElement>} */ (
      debounce(function onScroll () {
        Prism.highlightElement(ref.current)

        // @ts-ignore
        Prism.plugins.lineNumbers.resize(ref.current)

        // @ts-ignore
        Prism.plugins.lineHighlight.highlightLines(ref.current)()
      })
    )

  useEffect(onScroll, [onScroll, props, ref])

  return (
    <pre
      className={[
        classNames.div,
        classNames.$editor,
        classNames.pre,
        `language-${lang}`
      ].join(" ")}
      data-src={src}
      style={{
        "display": "block",
        "userSelect": "auto",
        ... style
      }}
      onScroll={onScroll}
      {...props}
      ref={ref}
    />
  )
}
