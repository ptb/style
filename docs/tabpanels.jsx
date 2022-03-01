/*
  eslint-disable
    react/prop-types
 */

import { Children, cloneElement, Fragment } from "./jsx-runtime"

/**
  @typedef {import ("./tabs").ClassNames} ClassNames
 
  @typedef {typeof import ("react")} React
 */

/**
  Wrapper for `<Tabpanel>` React components.

  @param {object} props
  - Component inputs.
 
  @param {React.ReactElement | React.ReactElement[]} props.children
  - `<Tabpanel>`s between the opening and closing tags of the component.
 
  @param {ClassNames} [props.classNames]
  - Plain JavaScript object containing CSS class names.
 
  @param {string} props.group
  - The radio `group` is defined by giving each of radio buttons in
  the `group` the same name. Also used to define the value that labels
  the `tablist` element.

  @param {string[]} props.labels
  - Array of strings representing the title of each `<Tab>`.

  @param {string} props.selected
  - Number representing the current selected `<Tab>`.
 
  @returns {React.ReactElement}
    `<Tabpanel>` React components.
 */

export function Tabpanels ({
  children,
  classNames,
  group,
  labels,
  selected
}) {
  return (
    <Fragment>
      {Children.map(
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
            "index": String(index),
            "label": labels[index],
            selected
          })
        }
      )}
    </Fragment>
  )
}
