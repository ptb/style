import { style } from "../../demo/js/editor/style.js"
import { Prism } from "../../demo/js/prism.js"
import {
  createElement as h,
  useEffect,
  useRef
} from "../../demo/js/react.js"
import { css, debounce } from "../../src/style.js"

export function File ({ lang = "js", styles = {}, ... props }) {
  const ref = useRef(null)

  const onScroll = debounce(function onScroll () {
    Prism.highlightElement(ref.current)

    // @ts-ignore
    Prism.plugins.lineNumbers.resize(ref.current)

    // @ts-ignore
    Prism.plugins.lineHighlight.highlightLines(ref.current)()
  })

  useEffect(onScroll, [props, ref])

  return h("pre", {
    "className": css(
      [
        style.div,
        style.common,
        style.pre,
        /** @type {import ("../..").StylesObject} */ ({
          "&": { "display": "block", "userSelect": null }
        }),
        styles
      ],
      [`language-${lang}`]
    ),
    onScroll,
    ... props,
    ref
  })
}
