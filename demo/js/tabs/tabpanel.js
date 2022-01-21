import { css } from "../../../src/style.js"
import { createElement as h, Fragment } from "../react.js"
import { getId } from "./get-id.js"

/**
  @typedef {typeof import ("react")} React

  @typedef {import (".").ClassNames} ClassNames

  @typedef {import (".").Styles} Styles
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

  @param {boolean} [props.isDynamic]
  - If `true`, then use dynamic `css` function.
  - If `false`, then use static class name strings.

  @param {string} [props.label]
  - Controlling `<Tab>`'s label text.

  @param {number} [props.selected]
  - Currently selected tab position.

  @param {Styles} [props.styles]
  - Plain JavaScript object or array of objects containing CSS styles.

  @returns {React.ReactElement}
    React component.
 */

export function Tabpanel ({
  "as": Component = "section",
  children,
  classNames = {},
  group,
  index,
  isDynamic,
  label,
  selected,
  styles = {},
  ... props
}) {
  const id = getId(label)
  const groupName = getId(group)

  return h(Fragment, {}, [
    h("input", {
      "checked": index === selected,
      "className": isDynamic
        ? css([{ "display": "none" }, styles.radio])
        : classNames.radio,
      "id": `${id}-input`,
      "name": groupName,
      "type": "radio"
    }),
    h(
      Component,
      {
        "aria-hidden": index !== selected,
        "aria-labelledby": `${id}-tab`,
        "className": isDynamic
          ? css(styles.tabpanel)
          : classNames.tabpanel,
        "id": `${id}-panel`,
        "role": "tabpanel",
        "tabIndex": index === selected ? 0 : -1,
        ... props
      },
      children
    )
  ])
}
