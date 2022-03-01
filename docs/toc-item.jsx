/*
  eslint-disable
    react/prop-types
*/

import { get } from "../index.js"
import { getId } from "./get-id.js"
import classNames from "./toc-item.css.js"

/**
  @typedef {typeof import("react")} React
 */

/**
  Table of contents menu item React component.

  @param {object} props
  - Component inputs.

  @param {string} props.children
  - `<Tabpanel>`s between the opening and closing tags of the component.

  @returns {React.ReactElement}
    React component.
 */

export function TocItem ({ children }) {
  return (
    <div
      className={[
        classNames.item,
        get(classNames, getId(children))
      ].join(" ")}
    >
      {children}
    </div>
  )
}
