/*
  eslint-disable
    compat/compat,
    max-lines-per-function
 */

import { isArr, isObj } from "../index.js"
import { useMemo, useState } from "./jsx-runtime"
import { useParam } from "./use-param.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  Tabs widget react hook that implements the WAI-ARIA tabs design pattern.

  Tabs are a set of layered sections of content, known as tab panels, that
  display one panel of content at a time. Each tab panel has an associated
  tab element, that when activated, displays the panel. The list of tab
  elements is arranged along one edge of the currently displayed panel,
  most commonly the top edge.

  @see https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel

  @param {object} props
  - Component inputs.

  @param {string} props.group
  - The value that labels the `tablist` element.

  @param {string[] | Record<string, string[]>} props.tabs
  - An array of strings or an object with arrays of strings as values
  identifying each element in the tab list that serves as a label for
  each of the tab panels and can be activated to display that panel.

  @typedef {object} UseTabsReturns

  @property {string[]} labels
  - Array of strings representing the title of each `<Tab>`.

  @property {string} param
  - String representing the initial selected `<Tab>`.

  @property {string} selected
  - String representing the current selected `<Tab>`.

  @property {React.Dispatch<React.SetStateAction<string>>} setSelected
  - Set the `selected` `<Tab>` in response to keyboard or mouse input.

  @property {(index: string) => void} setParam
  - Get existing key/value pairs from `location.hash` and current
  selected `<Tab>` `index` then set in `location.hash`.

  @returns {UseTabsReturns}
    An object with the properties:
  - `labels`
  - `param`
  - `selected`
  - `setSelected`
  - `setParam`.
 */

export function useTabs ({ group = "t", tabs = [] }) {
  const [param, setParam] = useParam(group)

  const [selected, setSelected] = useState(param || "0")

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

  return { labels, param, selected, setParam, setSelected }
}
