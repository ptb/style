/*
  eslint-disable
    compat/compat,
    max-lines-per-function
 */

import {
  css,
  get,
  isArr,
  isObj,
  isStr,
  toPairs
} from "../../../src/style.js"
import {
  Children,
  cloneElement,
  createElement as h,
  useEffect,
  useMemo,
  useState
} from "../react.js"
import { Tablist } from "./tablist.js"
export { Tabpanel } from "./tabpanel.js"

/**
  @typedef {typeof import ("react")} React

  @typedef {import ("../../..").StylesObject} StylesObject
 */

/**
  @typedef {object} ClassNames
  - Plain JavaScript object containing CSS class names.

  @property {StylesObject} [radio]
  - Class names for `<input type="radio">` components.

  @property {string} [tab]
  - Class names for `<Tab>` components.

  @property {string} [tabs]
  - Class names for `<Tabs>` component.

  @property {string} [tablist]
  - Class names for `<Tablist>` component.

  @property {string} [tabpanel]
  - Class names for `<Tabpanel>` components.
 */

/**
  @typedef {object} Styles
  - Plain JavaScript object or array of objects containing CSS styles.

  @property {StylesObject} [radio]
  - Styles for `<input type="radio">` components.

  @property {StylesObject} [tab]
  - Styles for `<Tab>` components.

  @property {StylesObject} [tabs]
  - Styles for `<Tabs>` component.

  @property {StylesObject} [tablist]
  - Styles for `<Tablist>` component.

  @property {StylesObject} [tabpanel]
  - Styles for `<Tabpanel>` components.
 */

/**
  Tabs widget component that implements the WAI-ARIA tabs design pattern.

  Tabs are a set of layered sections of content, known as tab panels, that
  display one panel of content at a time. Each tab panel has an associated
  tab element, that when activated, displays the panel. The list of tab
  elements is arranged along one edge of the currently displayed panel,
  most commonly the top edge.

  @see https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel

  @param {object} props
  - Component inputs.

  @param {keyof JSX.IntrinsicElements | React.ElementType} [props.as]
  - Render a different HTML tag or custom component.

  @param {React.ReactElement | React.ReactElement[]} props.children
  - `<Tabpanel>`s between the opening and closing tags of the component.

  @param {ClassNames} [props.classNames]
  - Plain JavaScript object containing CSS class names.

  @param {string} props.group
  - The radio `group` is defined by giving each of radio buttons in
  the `group` the same name. Also used to define the value that labels
  the `tablist` element.

  @param {React.ElementType} [props.heading]
  - React component to use for heading sections when `tabs` is
  an object. The keys of the object will be inserted as children
  of `heading` component and the values will be used as `<Tab>`s.

  @param {boolean} [props.isDynamic]
  - If `true`, then use dynamic `css` function.
  - If `false`, then use static class name strings.

  @param {"horizontal" | "vertical"} [props.orientation]
  - If the tablist element is vertically oriented, it has the property
  `orientation` set to `vertical`. The default value of `orientation`
  for a tablist element is `horizontal`.

  @param {Styles} [props.styles]
  - Plain JavaScript object or array of objects containing CSS styles.

  @param {Record<string, string[]> | string[]} props.tabs
  - An array of strings or an object with arrays of strings as values
  identifying each element in the tab list that serves as a label for
  each of the tab panels and can be activated to display that panel.

  @returns {React.ReactElement}
    React component.
 */

export function Tabs ({
  "as": Component = "aside",
  children,
  classNames = {},
  group = "t",
  heading,
  isDynamic,
  orientation = "horizontal",
  styles = {},
  tabs = [],
  ... props
}) {
  /**
    Convert key/value pairs in `location.hash` to an object.

    @returns {Record<string, string>}
      Object containing key/value pairs in `location.hash`.
   */

  function getParams () {
    return new URL(window.location.href).hash
      .slice(1)
      .split("&")
      .reduce(
        /**
          Convert key/value pairs in `location.hash` to an object.

          @param {Record<string, string>} items
          - Object containing key/value pairs in `location.hash`.

          @param {string} item
          - String key/value pair.

          @returns {Record<string, string>}
            Object containing key/value pairs in `location.hash`.
         */

        function (items, item) {
          if (item) {
            const [key, val] = item.split("=")

            if (isStr(key)) {
              items[key] = isStr(val) ? val : ""
            }
          }

          return items
        },
        {}
      )
  }

  /**
    Get existing key/value pairs from `location.hash` and current
    selected `<Tab>` `index` then set in `location.hash`.

    @param {number} index
    - Current selected `<Tab>` index.

    @returns {void}
   */

  function updParams (index) {
    const hash = toPairs({ ... getParams(), [group]: index })
      .reduce(
        /**
          Join existing key/value pairs from `location.hash` and current
          selected `<Tab>` `index` to key `group`.

          @param {string[]} items
          - Array of strings containing key/value pairs.

          @param {[string, string]} item
          - Tuple of strings containing key/value pair.

          @returns {string[]}
            Array of strings containing the key/value pairs joined
            with an `=` character.
         */

        function (items, [key, val]) {
          return items.concat([key, val].join("="))
        },
        []
      )
      .join("&")

    window.history.pushState(null, "", `#${hash}`)
  }

  /**
    Get the current selected `<Tab>` index from `location.hash`.

    @returns {number}
      Number representing the current selected `<Tab>`.
   */

  function getInitial () {
    return Number(get(getParams(), group) || 0)
  }

  const [initial, setInitial] = useState(getInitial())

  /**
    Update `location.hash` when `hashchange` event is triggered.

    @returns {void}
   */

  function updInitial () {
    setInitial(getInitial())
  }

  useEffect(function () {
    window.addEventListener("hashchange", updInitial)

    return function () {
      window.removeEventListener("hashchange", updInitial)
    }
  }, [])

  const [selected, setSelected] = useState(initial)

  const labels = useMemo(
    function () {
      if (isArr(tabs)) {
        return tabs
      }

      if (isObj(tabs)) {
        return Object.values(tabs).reduce(function (results, tab) {
          return results.concat(tab)
        }, [])
      }

      return []
    },
    [tabs]
  )

  return h(
    Component,
    {
      "className": isDynamic ? css(styles.tabs) : classNames.tabs,
      ... props
    },
    [
      h(Tablist, {
        classNames,
        group,
        heading,
        initial,
        isDynamic,
        orientation,
        selected,
        setSelected,
        styles,
        tabs,
        "total": labels.length,
        updParams
      }),
      Children.map(
        children,
        /**
          Iterate over children and add `group`, `index`, `label`, and
          `selected` props.

          @param {React.ReactElement} child
          - Tabpanel widget component.

          @param {number} index
          - `<Tabpanel>` position in render order.

          @returns {React.ReactElement}
            React component.
         */

        function (child, index) {
          return cloneElement(child, {
            classNames,
            group,
            index,
            isDynamic,
            "label": labels[index],
            selected,
            styles
          })
        }
      )
    ]
  )
}
