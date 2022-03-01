/*
  eslint-disable
    compat/compat,
    max-lines-per-function,
    no-plusplus,
    react/jsx-key,
    react/prop-types
 */

import { isArr, isFn, isObj, toPairs } from "../index.js"
import { getId } from "./get-id.js"
import { useCallback, useMemo, useState } from "./jsx-runtime"
import { Tab } from "./tab.jsx"

/**
  @typedef {import ("./tabs").ClassNames} ClassNames

  @typedef {typeof import ("react")} React
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

  @param {string} props.initial
  - Initial selected `<Tab>` index.

  @param {React.ElementType} [props.menuitem]
  - React component to use to wrap each menu item.

  @param {"horizontal" | "vertical"} [props.orientation]
  - If the tablist element is vertically oriented, it has the property
  `orientation` set to `vertical`. The default value of `orientation`
  for a tablist element is `horizontal`.

  @param {string} props.selected
  - Current selected `<Tab>` index.

  @param {React.Dispatch<React.SetStateAction<string>>} props.setSelected
  - Set the `selected` `<Tab>` in response to keyboard or mouse input.

  @param {string[] | Record<string, string[]>} props.tabs
  - An array of strings or an object with arrays of strings as values
  identifying each element in the tab list that serves as a label for
  each of the tab panels and can be activated to display that panel.

  @param {number} props.total
  - Number of total tabs.

  @param {function (string): void} props.updParams
  - Get existing key/value pairs from `location.hash` and current
  selected `<Tab>` `index` then set in `location.hash`.

  @returns {React.ReactElement}
    React component.
 */

export function Tablist ({
  "as": Component = "ul",
  classNames = {},
  group,
  "heading": Heading,
  initial,
  menuitem,
  orientation = "horizontal",
  selected,
  setSelected,
  tabs,
  total,
  updParams,
  ... props
}) {
  const [focused, setFocused] = useState(Number(initial))

  const refs = useMemo(
    function () {
      return Array.from(Array(total).keys()).map(function () {
        return /** @type {React.RefObject<HTMLLabelElement>} */ ({
          "current": null
        })
      })
    },
    [total]
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
      setSelected(String(index))
      updParams(String(index))
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
          setSelected(String(index))
          updParams(String(index))
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
    Tab widget component that implements a grouping label providing a
    mechanism for selecting the tab content that is to be rendered to
    the user.

    @param {string} label
    - String to use as the title of the `<Tab>`.

    @returns {React.ReactElement}
      React component.
   */

  function TabFn (label) {
    const index = n++

    return (
      <Tab
        classNames={classNames}
        handleClick={handleClick}
        index={index}
        key={getId(label)}
        label={label}
        menuitem={menuitem}
        onKeyDown={onKeyDown}
        ref={refs[index]}
        selected={selected}
      />
    )
  }

  return (
    <Component
      aria-label={group}
      aria-orientation={orientation}
      className={classNames.tablist}
      role="tablist"
      {...props}
    >
      {isObj(tabs) &&
        toPairs(tabs).map(function ([label, list]) {
          return (
            <li>
              {isFn(Heading) && <Heading>{label}</Heading>}
              <Component className={classNames.sublist}>
                {list.map(TabFn)}
              </Component>
            </li>
          )
        })}
      {isArr(tabs) && tabs.map(TabFn)}
    </Component>
  )
}
