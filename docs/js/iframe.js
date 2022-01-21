import { createElement as h, useRef } from "../../demo/js/react.js"
import { css } from "../../src/style.js"

/**
  @typedef {import ("react")} React
 */

/**

  @param {object} props
  - Component inputs.

  @param {object} props.styles

  @returns {React.ReactElement}
    React component.
 */

export function Iframe ({ styles = {}, ... props }) {
  const ref = useRef(null)

  // function onLoad () {
  //   if (ref && ref.current) {
  //     ref.current.style.maxHeight =
  //       (ref.current.contentWindow.document.body.scrollHeight + 20) + "px"
  //   }
  // }

  return h("iframe", {
    "className": css(styles),
    "loading": "lazy",
    ... props,
    ref
  })
}
