/*
  eslint-disable
    compat/compat,
    jsdoc/require-jsdoc,
    jsdoc/require-description,
    jsdoc/require-param-description,
    jsdoc/require-returns-description,
    max-lines-per-function,
    no-plusplus
 */

import {
  css,
  isArr,
  isFn,
  isObj,
  toPairs
} from "../../../src/style.js"
import {
  createElement as h,
  useCallback,
  useMemo,
  useState
} from "../react.js"
import { getId } from "./get-id.js"
import { Tab } from "./tab.js"

/**
  @typedef {typeof import ("react")} React

  @typedef {import (".").ClassNames} ClassNames

  @typedef {import (".").Styles} Styles
  */

/**
  Tablist widget component containing a list of `<Tab>` elements,
  which are references to `<Tabpanel>` elements.

  @see https://www.w3.org/TR/wai-aria-1.2/#tablist

  @param {object} props
  - Component inputs.

  @param {keyof JSX.IntrinsicElements | React.ElementType} [props.as]
  - Render a different HTML tag or custom component.

  @param {ClassNames} [props.classNames]
  - Plain JavaScript object containing CSS class names.

  @param {string} props.group
  - The value that labels the `tablist` element.

  @param {React.ElementType} [props.heading]
  - React component to use for heading sections when `tabs` is
  an object. The keys of the object will be inserted as children
  of `heading` component and the values will be used as `<Tab>`s.

  @param {number} props.initial
  - Initial selected `<Tab>` index.

  @param {boolean} [props.isDynamic]
  - If `true`, then use dynamic `css` function.
  - If `false`, then use static class name strings.

  @param {"horizontal" | "vertical"} [props.orientation]
  - If the tablist element is vertically oriented, it has the property
  `orientation` set to `vertical`. The default value of `orientation`
  for a tablist element is `horizontal`.

  @param {number} props.selected
  - Current selected `<Tab>` index.

  @param {React.Dispatch<React.SetStateAction<number>>} props.setSelected

  @param {number} props.total

  @param {Styles} [props.styles]
  - Plain JavaScript object or array of objects containing CSS styles.

  @param {Record<string, string[]> | string[]} props.tabs
  - An array of strings or an object with arrays of strings as values
  identifying each element in the tab list that serves as a label for
  each of the tab panels and can be activated to display that panel.

  @param {function (number): void} props.updParams

  @returns {React.ReactElement}
    React component.
 */

export function Tablist ({
  "as": Component = "ul",
  classNames = {},
  group,
  "heading": Heading,
  initial,
  isDynamic,
  orientation = "horizontal",
  selected,
  setSelected,
  styles = {},
  tabs,
  total,
  updParams,
  ... props
}) {
  const [focused, setFocused] = useState(initial)

  const refs = useMemo(
    function () {
      return Array.from(Array(total).keys()).map(function () {
        return /** @type {React.RefObject<HTMLLabelElement>} */ ({
          "current": null
        })
      })
    },
    [tabs, total]
  )

  const handleClick = useCallback(
    /**
      Respond to pointer events.

      @param {number} index
      - `<Tab>` position to select.

      @returns {void}
     */

    function handleClick (index) {
      setFocused(index)
      setSelected(index)
      updParams(index)
    },
    [setFocused, setSelected, updParams]
  )

  const onKeyDown = useCallback(
    /**
      Respond to keyboard events.

      @param {React.KeyboardEvent} e
      - Object describing a user interaction with the keyboard; each
      event describes a single interaction between the user and a
      key on the keyboard.

      @returns {void}
     */

    function onKeyDown (e) {
      let index = focused

      switch (e.code) {
        case "ArrowDown":
          if (orientation === "vertical") {
            e.preventDefault()
            index = (focused + 1 + total) % total
          }
          break
        case "ArrowLeft":
          if (orientation === "horizontal") {
            e.preventDefault()
            index = (focused - 1 + total) % total
          }
          break
        case "ArrowRight":
          if (orientation === "horizontal") {
            e.preventDefault()
            index = (focused + 1 + total) % total
          }
          break
        case "ArrowUp":
          if (orientation === "vertical") {
            e.preventDefault()
            index = (focused - 1 + total) % total
          }
          break
        case "End":
          e.preventDefault()
          index = total - 1
          break
        case "Home":
          e.preventDefault()
          index = 0
          break
        case "Enter":
        case "Space":
          e.preventDefault()
          setSelected(index)
          updParams(index)
          break
      }

      setFocused(index)

      const ref = refs[index]

      if (ref && ref.current) {
        ref.current.focus()
      }
    },
    [
      focused,
      orientation,
      refs,
      setFocused,
      setSelected,
      total,
      updParams
    ]
  )

  let n = 0

  /**
    @param {string} label

    @returns {React.ReactElement}
   */

  function TabFn (label) {
    const index = n++

    return h(Tab, {
      classNames,
      handleClick,
      index,
      isDynamic,
      "key": getId(label),
      label,
      onKeyDown,
      "ref": refs[index],
      selected,
      styles
    })
  }

  return h(
    Component,
    {
      "aria-label": group,
      "aria-orientation": orientation,
      "className": isDynamic ? css(styles.tablist) : classNames.tablist,
      "role": "tablist",
      ... props
    },
    isObj(tabs) &&
      toPairs(tabs).map(function ([label, list]) {
        return h(
          "li",
          { "key": getId(label) },
          isFn(Heading) && h(Heading, null, label),
          h(
            Component,
            {
              "className": isDynamic
                ? css(styles.tablist)
                : classNames.tablist
            },
            list.map(TabFn)
          )
        )
      }),
    isArr(tabs) && tabs.map(TabFn)
  )
}
