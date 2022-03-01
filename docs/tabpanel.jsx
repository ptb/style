/*
  eslint-disable
    react/prop-types
 */

import { getId } from "./get-id.js"
import { Fragment } from "./jsx-runtime"

/**
  @typedef {import ("./tabs").ClassNames} ClassNames
 
  @typedef {typeof import ("react")} React
 */

/**
  Tabpanel widget component that contains the content associated with
  a `<Tab>`.

  @see https://www.w3.org/TR/wai-aria-1.2/#tabpanel

  @param {object} props
  - Component inputs.

  @param {keyof JSX.IntrinsicElements | React.ElementType} [props.as]
  - Render a different HTML tag or custom component.

  @param {React.ReactNode} props.children
  - `<Tabpanel>` component content.

  @param {ClassNames} [props.classNames]
  - Plain JavaScript object containing CSS class names.

  @param {string} [props.group]
  - The radio `group` is defined by giving each of radio buttons in
  the `group` the same name. Also used to define the value that labels
  the `tablist` element.

  @param {number} [props.index]
  - `<Tabpanel>` position in render order.

  @param {string} [props.label]
  - Controlling `<Tab>`'s label text.

  @param {number} [props.selected]
  - Currently selected tab position.

  @returns {React.ReactElement}
    React component.
 */

export function Tabpanel ({
  "as": Component = "section",
  children,
  classNames = {},
  group,
  index,
  label,
  selected,
  ... props
}) {
  const id = getId(label)
  const groupName = getId(group)

  return (
    <Fragment>
      <input
        checked={index === selected}
        className={classNames.radio}
        id={`${id}-input`}
        name={groupName}
        type="radio"
      />
      <Component
        aria-hidden={index !== selected}
        aria-labelledby={`${id}-tab`}
        className={classNames.tabpanel}
        id={`${id}-panel`}
        role="tabpanel"
        tabIndex={index === selected ? 0 : -1}
        {...props}
      >
        {children}
      </Component>
    </Fragment>
  )
}
